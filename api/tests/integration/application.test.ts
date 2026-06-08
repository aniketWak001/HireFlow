import { describe, it, expect, beforeAll, afterAll } from "vitest";
import supertest from "supertest";
import app from "../../src/app.js";
import prisma from "../../src/db/prisma.js";

const request = supertest(app);

const recruiter = {
  name: "App Recruiter",
  email: "app.recruiter@example.com",
  password: "password123",
  role: "recruiter" as const,
};

const candidate = {
  name: "App Candidate",
  email: "app.candidate@example.com",
  password: "password123",
  role: "candidate" as const,
};

let recruiterToken: string;
let candidateToken: string;
let jobId: string;
let applicationId: string;

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

  // create a job for testing
  const jobRes = await request
    .post("/api/v1/jobs")
    .set("Authorization", `Bearer ${recruiterToken}`)
    .send({
      title: "Full Stack Developer",
      description: "Build full stack applications",
      location: "Remote",
      jobType: "remote",
      skillsRequired: ["React", "Node.js"],
    });
  jobId = jobRes.body.data.id as string;
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

// ─────────────────────────────────────────
// SUBMIT APPLICATION
// ─────────────────────────────────────────

describe("POST /api/v1/jobs/:id/apply", () => {
  it("should submit application as candidate", async () => {
    const res = await request
      .post(`/api/v1/jobs/${jobId}/apply`)
      .set("Authorization", `Bearer ${candidateToken}`)
      .send({ coverLetter: "I am very interested in this position" });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.status).toBe("applied");

    applicationId = res.body.data.id as string;
  });

  it("should reject duplicate application", async () => {
    const res = await request
      .post(`/api/v1/jobs/${jobId}/apply`)
      .set("Authorization", `Bearer ${candidateToken}`)
      .send({ coverLetter: "Applying again" });

    expect(res.status).toBe(409);
    expect(res.body.message).toBe("You have already applied to this job");
  });

  it("should reject application without auth", async () => {
    const res = await request
      .post(`/api/v1/jobs/${jobId}/apply`)
      .send({ coverLetter: "No auth" });

    expect(res.status).toBe(401);
  });

  it("should reject application by recruiter", async () => {
    const res = await request
      .post(`/api/v1/jobs/${jobId}/apply`)
      .set("Authorization", `Bearer ${recruiterToken}`)
      .send({ coverLetter: "Recruiter applying" });

    expect(res.status).toBe(403);
  });

  it("should reject application to non-existent job", async () => {
    const res = await request
      .post("/api/v1/jobs/non-existent-id/apply")
      .set("Authorization", `Bearer ${candidateToken}`)
      .send({ coverLetter: "Applying to ghost job" });

    expect(res.status).toBe(404);
  });
});

// ─────────────────────────────────────────
// CANDIDATE DASHBOARD
// ─────────────────────────────────────────

describe("GET /api/v1/applications", () => {
  it("should return candidate own applications", async () => {
    const res = await request
      .get("/api/v1/applications")
      .set("Authorization", `Bearer ${candidateToken}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
    expect(res.body.data[0].job).toBeDefined();
  });

  it("should reject without auth", async () => {
    const res = await request.get("/api/v1/applications");
    expect(res.status).toBe(401);
  });

  it("should reject recruiter accessing candidate dashboard", async () => {
    const res = await request
      .get("/api/v1/applications")
      .set("Authorization", `Bearer ${recruiterToken}`);

    expect(res.status).toBe(403);
  });
});

// ─────────────────────────────────────────
// RECRUITER DASHBOARD
// ─────────────────────────────────────────

describe("GET /api/v1/jobs/:id/applications", () => {
  it("should return applicants for recruiter job", async () => {
    const res = await request
      .get(`/api/v1/jobs/${jobId}/applications`)
      .set("Authorization", `Bearer ${recruiterToken}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
    expect(res.body.data[0].candidate).toBeDefined();
  });

  it("should reject candidate accessing recruiter dashboard", async () => {
    const res = await request
      .get(`/api/v1/jobs/${jobId}/applications`)
      .set("Authorization", `Bearer ${candidateToken}`);

    expect(res.status).toBe(403);
  });

  it("should reject without auth", async () => {
    const res = await request.get(`/api/v1/jobs/${jobId}/applications`);
    expect(res.status).toBe(401);
  });
});

// ─────────────────────────────────────────
// UPDATE APPLICATION STATUS
// ─────────────────────────────────────────

describe("PATCH /api/v1/applications/:id/status", () => {
  it("should update application status as recruiter", async () => {
    const res = await request
      .patch(`/api/v1/applications/${applicationId}/status`)
      .set("Authorization", `Bearer ${recruiterToken}`)
      .send({ status: "reviewed" });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.status).toBe("reviewed");
  });

  it("should move application to interview stage", async () => {
    const res = await request
      .patch(`/api/v1/applications/${applicationId}/status`)
      .set("Authorization", `Bearer ${recruiterToken}`)
      .send({ status: "interview" });

    expect(res.status).toBe(200);
    expect(res.body.data.status).toBe("interview");
  });

  it("should reject invalid status", async () => {
    const res = await request
      .patch(`/api/v1/applications/${applicationId}/status`)
      .set("Authorization", `Bearer ${recruiterToken}`)
      .send({ status: "pending" });

    expect(res.status).toBe(400);
  });

  it("should reject candidate updating application status", async () => {
    const res = await request
      .patch(`/api/v1/applications/${applicationId}/status`)
      .set("Authorization", `Bearer ${candidateToken}`)
      .send({ status: "hired" });

    expect(res.status).toBe(403);
  });

  it("should reject without auth", async () => {
    const res = await request
      .patch(`/api/v1/applications/${applicationId}/status`)
      .send({ status: "hired" });

    expect(res.status).toBe(401);
  });
});
