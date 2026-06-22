import { api } from "./api.js";

export interface Job {
  id: string;
  title: string;
  description: string;
  location: string | null;
  jobType: "full_time" | "part_time" | "remote" | "contract";
  salaryMin: number | null;
  salaryMax: number | null;
  skillsRequired: string[];
  status: "open" | "closed" | "draft";
  createdAt: string;
  recruiter: { id: string; name: string };
}

export interface JobsResponse {
  data: Job[];
  nextCursor: string | null;
  hasNextPage: boolean;
}

export async function getJobs(params?: {
  search?: string;
  jobType?: string;
  location?: string;
  cursor?: string;
  limit?: number;
}): Promise<JobsResponse> {
  const res = await api.get("/api/v1/jobs", { params });
  return res.data as JobsResponse;
}

export async function getJobById(id: string): Promise<Job> {
  const res = await api.get(`/api/v1/jobs/${id}`);
  return res.data.data as Job;
}

export async function createJob(data: {
  title: string;
  description: string;
  location?: string;
  jobType: string;
  salaryMin?: number;
  salaryMax?: number;
  skillsRequired?: string[];
}): Promise<Job> {
  const res = await api.post("/api/v1/jobs", data);
  return res.data.data as Job;
}

export async function updateJob(id: string, data: Partial<Job>): Promise<Job> {
  const res = await api.patch(`/api/v1/jobs/${id}`, data);
  return res.data.data as Job;
}

export async function deleteJob(id: string): Promise<void> {
  await api.delete(`/api/v1/jobs/${id}`);
}

export async function closeJob(id: string): Promise<Job> {
  const res = await api.patch(`/api/v1/jobs/${id}/close`);
  return res.data.data as Job;
}

export async function applyToJob(
  jobId: string,
  data: { coverLetter?: string }
): Promise<void> {
  await api.post(`/api/v1/jobs/${jobId}/apply`, data);
}

export async function getJobApplications(jobId: string) {
  const res = await api.get(`/api/v1/jobs/${jobId}/applications`);
  return res.data.data;
}
