import { redis } from "../config/redis.js";
import logger from "./logger.js";

const DEFAULT_TTL = 60 * 5; // 5 minutes
const isTest = process.env.NODE_ENV === "test";

export async function getCache<T>(key: string): Promise<T | null> {
  try {
    const data = await redis.get(key);
    if (!data) return null;
    return JSON.parse(data) as T;
  } catch (error) {
     if (!isTest) logger.error({ error }, "Cache get error");
    return null;
  }
}

export async function setCache(
  key: string,
  value: unknown,
  ttl: number = DEFAULT_TTL
): Promise<void> {
  try {
    await redis.set(key, JSON.stringify(value), { EX: ttl });
  } catch (error) {
     if (!isTest) logger.error({ error }, "Cache set error");
  }
}

export async function deleteCache(key: string): Promise<void> {
  try {
    await redis.del(key);
  } catch (error) {
     if (!isTest) logger.error({ error }, "Cache delete error");
  }
}

export async function deleteCacheByPattern(pattern: string): Promise<void> {
  try {
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(keys);
    }
  } catch (error) {
     if (!isTest) logger.error({ error }, "Cache delete by pattern error");
  }
}

export const CacheKeys = {
  jobList: (query: string) => `jobs:list:${query}`,
  jobById: (id: string) => `jobs:${id}`,
  analytics: () => "admin:analytics",
};