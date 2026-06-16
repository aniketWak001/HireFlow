import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { mockClient } from "aws-sdk-client-mock";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import supertest from "supertest";
import app from "../../src/app.js";
import prisma from "../../src/db/prisma.js";

// mock S3 client
const s3Mock = mockClient(S3Client);

// mock getSignedUrl
vi.mock("@aws-sdk/s3-request-presigner", () => ({
  getSignedUrl: vi.fn().mockResolvedValue("https://mock-s3-url.com/resume.pdf"),
}));

const request = supertest(app);

const candidate = {
  name: "Resume Candidate",
  email: "resume.candidate@example.com",
  password: "password123",
  role: "candidate" as const,
};

const recruiter = {
  name: "Resume Recruiter",
  email: "resume.recruiter@example.com",
  password: "password123",
  role: "recruiter" as const,
};

let candidateToken: string;
let recruiterToken: string;
let resumeId: string;

const testPdfBuffer = Buffer.from(
  "%PDF-1.4 test resume content John Doe john@example.com Node.js TypeScript",
);

beforeAll(async () => {
  // set up S3 mock
  s3Mock.reset();
  s3Mock.on(PutObjectCommand).resolves({});
  s3Mock.on(DeleteObjectCommand).resolves({});
  s3Mock.on(GetObjectCommand).resolves({});

  await prisma.resume.deleteMany({
    where: { candidate: { email: candidate.email } },
  });
  await prisma.refreshToken.deleteMany({
    where: {
      user: { email: { in: [candidate.email, recruiter.email] } },
    },
  });
  await prisma.user.deleteMany({
    where: { email: { in: [candidate.email, recruiter.email] } },
  });

  await request.post("/api/v1/auth/register").send(candidate);
  const candidateLogin = await request.post("/api/v1/auth/login").send({
    email: candidate.email,
    password: candidate.password,
  });
  candidateToken = candidateLogin.body.data.accessToken as string;

  await request.post("/api/v1/auth/register").send(recruiter);
  const recruiterLogin = await request.post("/api/v1/auth/login").send({
    email: recruiter.email,
    password: recruiter.password,
  });
  recruiterToken = recruiterLogin.body.data.accessToken as string;
});

afterAll(async () => {
  await prisma.resume.deleteMany({
    where: { candidate: { email: candidate.email } },
  });
  await prisma.refreshToken.deleteMany({
    where: {
      user: { email: { in: [candidate.email, recruiter.email] } },
    },
  });
  await prisma.user.deleteMany({
    where: { email: { in: [candidate.email, recruiter.email] } },
  });
  await prisma.$disconnect();
});

// ─────────────────────────────────────────
// UPLOAD RESUME
// ─────────────────────────────────────────

describe("POST /api/v1/resumes", () => {
  it("should upload a resume as candidate", async () => {
    const res = await request
      .post("/api/v1/resumes")
      .set("Authorization", `Bearer ${candidateToken}`)
      .attach("resume", testPdfBuffer, {
        filename: "test-resume.pdf",
        contentType: "application/pdf",
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.parseStatus).toBe("pending");
    expect(res.body.data.fileName).toBe("test-resume.pdf");

    resumeId = res.body.data.id as string;
  });

  it("should reject non-PDF file", async () => {
    const res = await request
      .post("/api/v1/resumes")
      .set("Authorization", `Bearer ${candidateToken}`)
      .attach("resume", Buffer.from("not a pdf"), {
        filename: "test.txt",
        contentType: "text/plain",
      });

    expect(res.status).toBe(400);
  });

  it("should reject upload without auth", async () => {
    const res = await request
      .post("/api/v1/resumes")
      .attach("resume", testPdfBuffer, {
        filename: "test-resume.pdf",
        contentType: "application/pdf",
      });

    expect(res.status).toBe(401);
  });

  it("should reject upload by recruiter", async () => {
    const res = await request
      .post("/api/v1/resumes")
      .set("Authorization", `Bearer ${recruiterToken}`)
      .attach("resume", testPdfBuffer, {
        filename: "test-resume.pdf",
        contentType: "application/pdf",
      });

    expect(res.status).toBe(403);
  });

  it("should reject if no file attached", async () => {
    const res = await request
      .post("/api/v1/resumes")
      .set("Authorization", `Bearer ${candidateToken}`);

    expect(res.status).toBe(400);
  });
});

// ─────────────────────────────────────────
// GET RESUMES
// ─────────────────────────────────────────

describe("GET /api/v1/resumes", () => {
  it("should return candidate resumes with pre-signed URLs", async () => {
    const res = await request
      .get("/api/v1/resumes")
      .set("Authorization", `Bearer ${candidateToken}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
    expect(res.body.data[0]).toHaveProperty("url");
  });

  it("should reject without auth", async () => {
    const res = await request.get("/api/v1/resumes");
    expect(res.status).toBe(401);
  });

  it("should reject recruiter accessing resume list", async () => {
    const res = await request
      .get("/api/v1/resumes")
      .set("Authorization", `Bearer ${recruiterToken}`);

    expect(res.status).toBe(403);
  });
});

// ─────────────────────────────────────────
// DELETE RESUME
// ─────────────────────────────────────────

describe("DELETE /api/v1/resumes/:id", () => {
  it("should reject delete without auth", async () => {
    const res = await request.delete(`/api/v1/resumes/${resumeId}`);
    expect(res.status).toBe(401);
  });

  it("should reject delete by recruiter", async () => {
    const res = await request
      .delete(`/api/v1/resumes/${resumeId}`)
      .set("Authorization", `Bearer ${recruiterToken}`);

    expect(res.status).toBe(403);
  });

  it("should delete resume as candidate", async () => {
    const res = await request
      .delete(`/api/v1/resumes/${resumeId}`)
      .set("Authorization", `Bearer ${candidateToken}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("should return 404 after deletion", async () => {
    const res = await request
      .delete(`/api/v1/resumes/${resumeId}`)
      .set("Authorization", `Bearer ${candidateToken}`);

    expect(res.status).toBe(404);
  });
});
