import prisma from "../db/prisma.js";
import { uploadResumeToS3, getPresignedUrl } from "./s3.service.js";
import { resumeQueue, emailQueue } from "../config/bullmq.js";
import { AppError } from "../middleware/errorHandler.js";

export async function uploadResume(
  candidateId: string,
  fileBuffer: Buffer,
  originalName: string,
) {
  const { s3Key, fileName } = await uploadResumeToS3(
    fileBuffer,
    originalName,
    candidateId,
  );

  const resume = await prisma.resume.create({
    data: {
      candidateId,
      s3Key,
      fileName,
      parseStatus: "pending",
    },
  });

  // add to resume parsing queue
  await resumeQueue.add(
    "parse-resume",
    {
      resumeId: resume.id,
      s3Key,
      candidateId,
    },
    {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 5000,
      },
    },
  );

  return resume;
}

export async function getCandidateResumes(candidateId: string) {
  const resumes = await prisma.resume.findMany({
    where: { candidateId },
    orderBy: { uploadedAt: "desc" },
  });

  // generate pre-signed URLs for each resume
  const resumesWithUrls = await Promise.all(
    resumes.map(async (resume) => ({
      ...resume,
      url: await getPresignedUrl(resume.s3Key),
    })),
  );

  return resumesWithUrls;
}

export async function deleteResume(resumeId: string, candidateId: string) {
  const resume = await prisma.resume.findUnique({ where: { id: resumeId } });

  if (!resume) {
    throw new AppError(404, "Resume not found");
  }

  if (resume.candidateId !== candidateId) {
    throw new AppError(403, "You are not authorized to delete this resume");
  }

  const { deleteResumeFromS3 } = await import("./s3.service.js");
  await deleteResumeFromS3(resume.s3Key);

  await prisma.resume.delete({ where: { id: resumeId } });
}

export async function queueEmailNotification(
  type: "application_received" | "status_change" | "interview_invite",
  payload: Record<string, string>,
) {
  await emailQueue.add(
    "send-email",
    { type, payload },
    {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 3000,
      },
    },
  );
}
