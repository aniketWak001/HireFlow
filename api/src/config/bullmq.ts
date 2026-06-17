import "dotenv/config";
import { Queue } from "bullmq";
import { URL } from "url";

function getRedisConnection() {
  const redisUrl = process.env.REDIS_URL;

  if (redisUrl) {
    const parsed = new URL(redisUrl);
    return {
      host: parsed.hostname,
      port: Number(parsed.port) || 6379,
      password: parsed.password || undefined,
      tls: redisUrl.startsWith("rediss://") ? {} : undefined,
    };
  }

  return {
    host: process.env.REDIS_HOST ?? "localhost",
    port: Number(process.env.REDIS_PORT ?? 6379),
  };
}

const connection = getRedisConnection();

export const resumeQueue = new Queue("resume-processing", { connection });
export const emailQueue = new Queue("email-notifications", { connection });

export { connection };
