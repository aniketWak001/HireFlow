import prisma from "../db/prisma.js";
import { AppError } from "../middleware/errorHandler.js";

export interface CreateJobInput {
  title: string;
  description: string;
  location?: string;
  jobType: "full_time" | "part_time" | "remote" | "contract";
  salaryMin?: number;
  salaryMax?: number;
  skillsRequired?: string[];
}

export interface UpdateJobInput {
  title?: string;
  description?: string;
  location?: string;
  jobType?: "full_time" | "part_time" | "remote" | "contract";
  salaryMin?: number;
  salaryMax?: number;
  skillsRequired?: string[];
}

export interface JobListQuery {
  search?: string | undefined;
  jobType?: "full_time" | "part_time" | "remote" | "contract" | undefined;
  location?: string | undefined;
  cursor?: string | undefined;
  limit?: number | undefined;
}

export async function createJob(recruiterId: string, input: CreateJobInput) {
  const job = await prisma.job.create({
    data: {
      recruiterId,
      title: input.title,
      description: input.description,
      jobType: input.jobType,
      status: "open",
      skillsRequired: input.skillsRequired ?? [],
      ...(input.location !== undefined && { location: input.location }),
      ...(input.salaryMin !== undefined && { salaryMin: input.salaryMin }),
      ...(input.salaryMax !== undefined && { salaryMax: input.salaryMax }),
    },
  });

  return job;
}

export async function getJobs(query: JobListQuery) {
  const limit = query.limit ?? 10;

  const jobs = await prisma.job.findMany({
    where: {
      status: "open",
      ...(query.search && {
        OR: [
          { title: { contains: query.search, mode: "insensitive" } },
          { description: { contains: query.search, mode: "insensitive" } },
        ],
      }),
      ...(query.jobType && { jobType: query.jobType }),
      ...(query.location && {
        location: { contains: query.location, mode: "insensitive" },
      }),
    },
    orderBy: { createdAt: "desc" },
    take: limit + 1,
    ...(query.cursor && {
      cursor: { id: query.cursor },
      skip: 1,
    }),
    select: {
      id: true,
      title: true,
      location: true,
      jobType: true,
      salaryMin: true,
      salaryMax: true,
      skillsRequired: true,
      status: true,
      createdAt: true,
      recruiter: {
        select: { id: true, name: true },
      },
    },
  });

  const hasNextPage = jobs.length > limit;
  const data = hasNextPage ? jobs.slice(0, -1) : jobs;
  const nextCursor = hasNextPage ? data[data.length - 1]?.id : null;

  return { data, nextCursor, hasNextPage };
}

export async function getJobById(id: string) {
  const job = await prisma.job.findUnique({
    where: { id },
    include: {
      recruiter: {
        select: { id: true, name: true },
      },
    },
  });

  if (!job) {
    throw new AppError(404, "Job not found");
  }

  return job;
}

export async function updateJob(
  id: string,
  recruiterId: string,
  input: UpdateJobInput,
) {
  const job = await prisma.job.findUnique({ where: { id } });

  if (!job) {
    throw new AppError(404, "Job not found");
  }

  if (job.recruiterId !== recruiterId) {
    throw new AppError(403, "You are not authorized to update this job");
  }

  return prisma.job.update({
    where: { id },
    data: {
      ...(input.title !== undefined && { title: input.title }),
      ...(input.description !== undefined && {
        description: input.description,
      }),
      ...(input.location !== undefined && { location: input.location }),
      ...(input.jobType !== undefined && { jobType: input.jobType }),
      ...(input.salaryMin !== undefined && { salaryMin: input.salaryMin }),
      ...(input.salaryMax !== undefined && { salaryMax: input.salaryMax }),
      ...(input.skillsRequired !== undefined && {
        skillsRequired: input.skillsRequired,
      }),
    },
  });
}

export async function deleteJob(id: string, recruiterId: string) {
  const job = await prisma.job.findUnique({ where: { id } });

  if (!job) {
    throw new AppError(404, "Job not found");
  }

  if (job.recruiterId !== recruiterId) {
    throw new AppError(403, "You are not authorized to delete this job");
  }

  await prisma.job.delete({ where: { id } });
}

export async function closeJob(id: string, recruiterId: string) {
  const job = await prisma.job.findUnique({ where: { id } });

  if (!job) {
    throw new AppError(404, "Job not found");
  }

  if (job.recruiterId !== recruiterId) {
    throw new AppError(403, "You are not authorized to close this job");
  }

  if (job.status === "closed") {
    throw new AppError(400, "Job is already closed");
  }

  return prisma.job.update({
    where: { id },
    data: { status: "closed" },
  });
}
