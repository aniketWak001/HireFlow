import { describe, it, expect, beforeAll, afterAll } from "vitest";
import supertest from "supertest";
import app from "../../src/app.js";
import prisma from "../../src/db/prisma.js";

const request = supertest(app);

const adminUser = {
  name: "Admin User",
  email: "admin@example.com",
  password: "password123",
  role: "candidate" as const, // register as candidate then promote to admin
};

const regularUser = {
  name: "Regular User",
  email: "regular@example.com",
  password: "password123",
  role: "candidate" as const,
};

let adminToken: string;
let candidateToken: string;

beforeAll(async () => {
  // clean up
  await prisma.refreshToken.deleteMany({
    where: {
      user: { email: { in: [adminUser.email, regularUser.email] } },
    },
  });
  await prisma.user.deleteMany({
    where: { email: { in: [adminUser.email, regularUser.email] } },
  });

  // register admin user then promote role directly in DB
  await request.post("/api/v1/auth/register").send(adminUser);
  await prisma.user.update({
    where: { email: adminUser.email },
    data: { role: "admin" },
  });

  const adminLogin = await request.post("/api/v1/auth/login").send({
    email: adminUser.email,
    password: adminUser.password,
  });
  adminToken = adminLogin.body.data.accessToken as string;

  // register regular candidate
  await request.post("/api/v1/auth/register").send(regularUser);
  const candidateLogin = await request.post("/api/v1/auth/login").send({
    email: regularUser.email,
    password: regularUser.password,
  });
  candidateToken = candidateLogin.body.data.accessToken as string;
});

afterAll(async () => {
  await prisma.refreshToken.deleteMany({
    where: {
      user: { email: { in: [adminUser.email, regularUser.email] } },
    },
  });
  await prisma.user.deleteMany({
    where: { email: { in: [adminUser.email, regularUser.email] } },
  });
  await prisma.$disconnect();
});

// ADMIN ANALYTICS

describe("GET /api/v1/admin/analytics", () => {
  it("should return analytics as admin", async () => {
    const res = await request
      .get("/api/v1/admin/analytics")
      .set("Authorization", `Bearer ${adminToken}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty("users");
    expect(res.body.data).toHaveProperty("jobs");
    expect(res.body.data).toHaveProperty("applications");
    expect(res.body.data.users).toHaveProperty("total");
    expect(res.body.data.users).toHaveProperty("byRole");
    expect(res.body.data.jobs).toHaveProperty("total");
    expect(res.body.data.jobs).toHaveProperty("active");
    expect(res.body.data.applications).toHaveProperty("total");
    expect(res.body.data.applications).toHaveProperty("byStatus");
  });

  it("should return correct data types", async () => {
    const res = await request
      .get("/api/v1/admin/analytics")
      .set("Authorization", `Bearer ${adminToken}`);

    expect(typeof res.body.data.users.total).toBe("number");
    expect(typeof res.body.data.jobs.total).toBe("number");
    expect(typeof res.body.data.applications.total).toBe("number");
    expect(Array.isArray(res.body.data.users.byRole)).toBe(true);
    expect(Array.isArray(res.body.data.applications.byStatus)).toBe(true);
  });

  it("should reject candidate accessing analytics", async () => {
    const res = await request
      .get("/api/v1/admin/analytics")
      .set("Authorization", `Bearer ${candidateToken}`);

    expect(res.status).toBe(403);
  });

  it("should reject unauthenticated request", async () => {
    const res = await request.get("/api/v1/admin/analytics");
    expect(res.status).toBe(401);
  });
});
