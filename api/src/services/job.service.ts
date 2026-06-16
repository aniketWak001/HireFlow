import prisma from "../db/prisma.js";
import { AppError } from "../middleware/errorHandler.js";
import {
  getCache,
  setCache,
  deleteCache,
  deleteCacheByPattern,
  CacheKeys,
} from "../utils/cache.js";

export interface CreateJobInput {
  title: string;
  description: string;
  location?: string | undefined;
  jobType: "full_time" | "part_time" | "remote" | "contract";
  salaryMin?: number | undefined;
  salaryMax?: number | undefined;
  skillsRequired?: string[] | undefined;
}

export interface UpdateJobInput {
  title?: string | undefined;
  description?: string | undefined;
  location?: string | undefined;
  jobType?: "full_time" | "part_time" | "remote" | "contract" | undefined;
  salaryMin?: number | undefined;
  salaryMax?: number | undefined;
  skillsRequired?: string[] | undefined;
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

  // invalidate job list cache
  await deleteCacheByPattern("jobs:list:*");

  return job;
}

export async function getJobs(query: JobListQuery) {
  const cacheKey = CacheKeys.jobList(JSON.stringify(query));
  const cached = await getCache(cacheKey);
  if (cached) return cached;

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

  const result = { data, nextCursor, hasNextPage };

  // cache for 5 minutes
  await setCache(cacheKey, result, 300);

  return result;
}

export async function getJobById(id: string) {
  const cacheKey = CacheKeys.jobById(id);
  const cached = await getCache(cacheKey);
  if (cached) return cached;

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

  // cache for 10 minutes
  await setCache(cacheKey, job, 600);

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

  const updated = await prisma.job.update({
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

  // invalidate caches
  await deleteCache(CacheKeys.jobById(id));
  await deleteCacheByPattern("jobs:list:*");

  return updated;
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

  // invalidate caches
  await deleteCache(CacheKeys.jobById(id));
  await deleteCacheByPattern("jobs:list:*");
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

  const updated = await prisma.job.update({
    where: { id },
    data: { status: "closed" },
  });

  // invalidate caches
  await deleteCache(CacheKeys.jobById(id));
  await deleteCacheByPattern("jobs:list:*");

  return updated;
}
