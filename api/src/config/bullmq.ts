import "dotenv/config";
import { Queue } from "bullmq";

const connection = {
  host: process.env.REDIS_HOST ?? "localhost",
  port: Number(process.env.REDIS_PORT ?? 6379),
};

export const resumeQueue = new Queue("resume-processing", { connection });
export const emailQueue = new Queue("email-notifications", { connection });

export { connection };
