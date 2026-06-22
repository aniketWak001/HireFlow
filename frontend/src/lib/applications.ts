import { api } from "./api.js";

export interface Application {
  id: string;
  status: "applied" | "reviewed" | "interview" | "hired" | "rejected";
  coverLetter: string | null;
  appliedAt: string;
  job: {
    id: string;
    title: string;
    location: string | null;
    jobType: string;
    recruiter: { id: string; name: string };
  };
}

export async function getCandidateApplications(): Promise<Application[]> {
  const res = await api.get("/api/v1/applications");
  return res.data.data as Application[];
}

export async function updateApplicationStatus(
  applicationId: string,
  status: string,
): Promise<void> {
  await api.patch(`/api/v1/applications/${applicationId}/status`, { status });
}
