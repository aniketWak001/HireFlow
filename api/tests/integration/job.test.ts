import { describe, it, expect, beforeAll, afterAll } from "vitest";
import supertest from "supertest";
import app from "../../src/app.js";
import prisma from "../../src/db/prisma.js";

const request = supertest(app);

// test users
const recruiter = {
  name: "Test Recruiter",
  email: "recruiter@example.com",
  password: "password123",
  role: "recruiter" as const,
};

const candidate = {
  name: "Test Candidate",
  email: "candidate@example.com",
  password: "password123",
  role: "candidate" as const,
};

let recruiterToken: string;
let candidateToken: string;
let jobId: string;

beforeAll(async () => {
  // clean up
  await prisma.application.deleteMany({
    where: { candidate: { email: candidate.email } },
  });
  await prisma.job.deleteMany({
    where: { recruiter: { email: recruiter.email } },
  });
  await prisma.refreshToken.deleteMany({
    where: {
      user: { email: { in: [recruiter.email, candidate.email] } },
    },
  });
  await prisma.user.deleteMany({
    where: { email: { in: [recruiter.email, candidate.email] } },
  });

  // register and login recruiter
  await request.post("/api/v1/auth/register").send(recruiter);
  const recruiterLogin = await request.post("/api/v1/auth/login").send({
    email: recruiter.email,
    password: recruiter.password,
  });
  recruiterToken = recruiterLogin.body.data.accessToken as string;

  // register and login candidate
  await request.post("/api/v1/auth/register").send(candidate);
  const candidateLogin = await request.post("/api/v1/auth/login").send({
    email: candidate.email,
    password: candidate.password,
  });
  candidateToken = candidateLogin.body.data.accessToken as string;
});

afterAll(async () => {
  await prisma.application.deleteMany({
    where: { candidate: { email: candidate.email } },
  });
  await prisma.job.deleteMany({
    where: { recruiter: { email: recruiter.email } },
  });
  await prisma.refreshToken.deleteMany({
    where: {
      user: { email: { in: [recruiter.email, candidate.email] } },
    },
  });
  await prisma.user.deleteMany({
    where: { email: { in: [recruiter.email, candidate.email] } },
  });
  await prisma.$disconnect();
});

// CREATE JOB

describe("POST /api/v1/jobs", () => {
  it("should create a job as recruiter", async () => {
    const res = await request
      .post("/api/v1/jobs")
      .set("Authorization", `Bearer ${recruiterToken}`)
      .send({
        title: "Backend Engineer",
        description: "Build scalable backend systems",
        location: "Remote",
        jobType: "remote",
        salaryMin: 50000,
        salaryMax: 80000,
        skillsRequired: ["Node.js", "TypeScript"],
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBe("Backend Engineer");

    jobId = res.body.data.id as string;
  });

  it("should reject job creation without auth", async () => {
    const res = await request.post("/api/v1/jobs").send({
      title: "Backend Engineer",
      description: "Build scalable backend systems",
      jobType: "remote",
    });

    expect(res.status).toBe(401);
  });

  it("should reject job creation by candidate", async () => {
    const res = await request
      .post("/api/v1/jobs")
      .set("Authorization", `Bearer ${candidateToken}`)
      .send({
        title: "Backend Engineer",
        description: "Build scalable backend systems",
        jobType: "remote",
      });

    expect(res.status).toBe(403);
  });

  it("should reject job with missing required fields", async () => {
    const res = await request
      .post("/api/v1/jobs")
      .set("Authorization", `Bearer ${recruiterToken}`)
      .send({ title: "Incomplete Job" });

    expect(res.status).toBe(400);
  });
});

// Get Jobs

describe("GET /api/v1/jobs", () => {
  it("should return list of jobs", async () => {
    const res = await request.get("/api/v1/jobs");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("should filter jobs by jobType", async () => {
    const res = await request.get("/api/v1/jobs?jobType=remote");

    expect(res.status).toBe(200);
    expect(
      res.body.data.every((j: { jobType: string }) => j.jobType === "remote"),
    ).toBe(true);
  });

  it("should search jobs by title", async () => {
    const res = await request.get("/api/v1/jobs?search=Backend");

    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it("should support cursor-based pagination", async () => {
    const first = await request.get("/api/v1/jobs?limit=1");
    expect(first.status).toBe(200);

    const cursor = first.body.nextCursor as string;
    if (cursor) {
      const second = await request.get(`/api/v1/jobs?limit=1&cursor=${cursor}`);
      expect(second.status).toBe(200);
    }
  });
});

// get Job by ID

describe("GET /api/v1/jobs", () => {
  it("should return list of jobs", async () => {
    const res = await request.get("/api/v1/jobs");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("should filter jobs by jobType", async () => {
    const res = await request.get("/api/v1/jobs?jobType=remote");

    expect(res.status).toBe(200);
    expect(
      res.body.data.every((j: { jobType: string }) => j.jobType === "remote"),
    ).toBe(true);
  });

  it("should search jobs by title", async () => {
    const res = await request.get("/api/v1/jobs?search=Backend");

    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it("should support cursor-based pagination", async () => {
    const first = await request.get("/api/v1/jobs?limit=1");
    expect(first.status).toBe(200);

    const cursor = first.body.nextCursor as string;
    if (cursor) {
      const second = await request.get(`/api/v1/jobs?limit=1&cursor=${cursor}`);
      expect(second.status).toBe(200);
    }
  });
});

// Update Job

describe("PATCH /api/v1/jobs/:id", () => {
  it("should update a job as the owner recruiter", async () => {
    const res = await request
      .patch(`/api/v1/jobs/${jobId}`)
      .set("Authorization", `Bearer ${recruiterToken}`)
      .send({ title: "Senior Backend Engineer" });

    expect(res.status).toBe(200);
    expect(res.body.data.title).toBe("Senior Backend Engineer");
  });

  it("should reject update by candidate", async () => {
    const res = await request
      .patch(`/api/v1/jobs/${jobId}`)
      .set("Authorization", `Bearer ${candidateToken}`)
      .send({ title: "Hacked Title" });

    expect(res.status).toBe(403);
  });

  it("should reject update without auth", async () => {
    const res = await request
      .patch(`/api/v1/jobs/${jobId}`)
      .send({ title: "No Auth" });

    expect(res.status).toBe(401);
  });
});

// Close Job

describe("PATCH /api/v1/jobs/:id/close", () => {
  it("should close a job as the owner recruiter", async () => {
    const res = await request
      .patch(`/api/v1/jobs/${jobId}/close`)
      .set("Authorization", `Bearer ${recruiterToken}`);

    expect(res.status).toBe(200);
    expect(res.body.data.status).toBe("closed");
  });

  it("should reject closing already closed job", async () => {
    const res = await request
      .patch(`/api/v1/jobs/${jobId}/close`)
      .set("Authorization", `Bearer ${recruiterToken}`);

    expect(res.status).toBe(400);
  });
});

// Delete Job

describe("DELETE /api/v1/jobs/:id", () => {
  it("should reject delete by candidate", async () => {
    const res = await request
      .delete(`/api/v1/jobs/${jobId}`)
      .set("Authorization", `Bearer ${candidateToken}`);

    expect(res.status).toBe(403);
  });

  it("should delete a job as the owner recruiter", async () => {
    const res = await request
      .delete(`/api/v1/jobs/${jobId}`)
      .set("Authorization", `Bearer ${recruiterToken}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("should return 404 after deletion", async () => {
    const res = await request.get(`/api/v1/jobs/${jobId}`);
    expect(res.status).toBe(404);
  });
});
