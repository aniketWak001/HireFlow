import prisma from "../db/prisma.js";
import { AppError } from "../middleware/errorHandler.js";
import { queueEmailNotification } from "./resume.service.js";

export interface SubmitApplicationInput {
  coverLetter?: string | undefined;
}

export interface UpdateApplicationStatusInput {
  status: "applied" | "reviewed" | "interview" | "hired" | "rejected";
}

export async function submitApplication(
  candidateId: string,
  jobId: string,
  input: SubmitApplicationInput,
) {
  const job = await prisma.job.findUnique({ where: { id: jobId } });

  if (!job) {
    throw new AppError(404, "Job not found");
  }

  if (job.status !== "open") {
    throw new AppError(400, "Job is no longer accepting applications");
  }

  const existing = await prisma.application.findUnique({
    where: {
      candidateId_jobId: { candidateId, jobId },
    },
  });

  if (existing) {
    throw new AppError(409, "You have already applied to this job");
  }

  const application = await prisma.application.create({
    data: {
      candidateId,
      jobId,
      status: "applied",
      ...(input.coverLetter !== undefined && {
        coverLetter: input.coverLetter,
      }),
    },
    include: {
      job: {
        select: { id: true, title: true, location: true },
      },
    },
  });

  await queueEmailNotification("application_received", {
    candidateId,
    jobId,
    jobTitle: job.title,
  });

  return application;
}

export async function getCandidateApplications(candidateId: string) {
  const applications = await prisma.application.findMany({
    where: { candidateId },
    orderBy: { appliedAt: "desc" },
    include: {
      job: {
        select: {
          id: true,
          title: true,
          location: true,
          jobType: true,
          recruiter: { select: { id: true, name: true } },
        },
      },
    },
  });

  return applications;
}

export async function getJobApplications(jobId: string, recruiterId: string) {
  const job = await prisma.job.findUnique({ where: { id: jobId } });

  if (!job) {
    throw new AppError(404, "Job not found");
  }

  if (job.recruiterId !== recruiterId) {
    throw new AppError(
      403,
      "You are not authorized to view these applications",
    );
  }

  const applications = await prisma.application.findMany({
    where: { jobId },
    orderBy: { appliedAt: "desc" },
    include: {
      candidate: {
        select: { id: true, name: true, email: true },
      },
    },
  });

  return applications;
}

export async function updateApplicationStatus(
  applicationId: string,
  recruiterId: string,
  input: UpdateApplicationStatusInput,
) {
  const application = await prisma.application.findUnique({
    where: { id: applicationId },
    include: { job: true },
  });

  if (!application) {
    throw new AppError(404, "Application not found");
  }

  if (application.job.recruiterId !== recruiterId) {
    throw new AppError(
      403,
      "You are not authorized to update this application",
    );
  }

  await queueEmailNotification("status_change", {
    applicationId,
    status: input.status,
  });

  return prisma.application.update({
    where: { id: applicationId },
    data: { status: input.status },
    include: {
      candidate: { select: { id: true, name: true, email: true } },
      job: { select: { id: true, title: true } },
    },
  });
}
