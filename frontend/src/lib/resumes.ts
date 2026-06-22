import { api } from "./api.js";

export interface Resume {
  id: string;
  fileName: string | null;
  parseStatus: "pending" | "processing" | "done" | "failed";
  parsedSkills: string[];
  uploadedAt: string;
  url: string;
}

export async function uploadResume(file: File): Promise<Resume> {
  const formData = new FormData();
  formData.append("resume", file);
  const res = await api.post("/api/v1/resumes", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data as Resume;
}

export async function getResumes(): Promise<Resume[]> {
  const res = await api.get("/api/v1/resumes");
  return res.data.data as Resume[];
}

export async function deleteResume(id: string): Promise<void> {
  await api.delete(`/api/v1/resumes/${id}`);
}