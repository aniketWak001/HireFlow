import "dotenv/config";

import { createClient } from "redis";

const redisUrl =
  process.env.REDIS_URL ??
  `redis://${process.env.REDIS_HOST ?? "localhost"}:${process.env.REDIS_PORT ?? 6379}`;

export const redis = createClient({
  url: redisUrl,
});

redis.on("error", (err) => {
  console.error("Redis error:", err);
});
