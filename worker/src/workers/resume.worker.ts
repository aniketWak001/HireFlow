import "dotenv/config";
import { Worker, type Job } from "bullmq";
import prisma from "../config/prisma.js";
import { downloadFromS3 } from "../config/s3.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdf = require("pdf-parse") as (buffer: Buffer) => Promise<{ text: string }>;
const connection = {
  host: process.env.REDIS_HOST ?? "localhost",
  port: Number(process.env.REDIS_PORT ?? 6379),
};

interface ResumeJobData {
  resumeId: string;
  s3Key: string;
  candidateId: string;
}

async function processResume(job: Job<ResumeJobData>) {
  const { resumeId, s3Key } = job.data;

  console.log(`Processing resume: ${resumeId}`);

  // mark as processing
  await prisma.resume.update({
    where: { id: resumeId },
    data: { parseStatus: "processing" },
  });

  try {
    // download from S3
    const fileBuffer = await downloadFromS3(s3Key);

    // parse PDF
    const parsed = await pdf(fileBuffer);
    const text = parsed.text;

    // extract basic info using regex
    const emailMatch = text.match(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
    );
    const parsedEmail = emailMatch?.[0] ?? null;

    // extract name — first line that looks like a name
    const lines = text
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    const parsedName = lines[0] ?? null;

    // extract skills — look for common keywords
    const skillKeywords = [
      "JavaScript", "TypeScript", "Node.js", "React", "Express",
      "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Python",
      "Java", "CSS", "HTML", "Git", "REST", "GraphQL", "Next.js",
    ];
    const parsedSkills = skillKeywords.filter((skill) =>
      text.toLowerCase().includes(skill.toLowerCase())
    );

    // update resume with parsed data
    await prisma.resume.update({
      where: { id: resumeId },
      data: {
        parseStatus: "done",
        rawText: text,
        ...(parsedEmail !== null && { parsedEmail }),
        ...(parsedName !== null && { parsedName }),
        parsedSkills,
      },
    });

    console.log(`Resume parsed successfully: ${resumeId}`);
  } catch (error) {
    await prisma.resume.update({
      where: { id: resumeId },
      data: { parseStatus: "failed" },
    });
    throw error;
  }
}

export const resumeWorker = new Worker<ResumeJobData>(
  "resume-processing",
  processResume,
  {
    connection,
    concurrency: 5,
  }
);

resumeWorker.on("completed", (job) => {
  console.log(`Resume job ${job.id} completed`);
});

resumeWorker.on("failed", (job, error) => {
  console.error(`Resume job ${job?.id} failed:`, error.message);
});