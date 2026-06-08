import supertest from "supertest";
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import app from "../../src/app.js";
import prisma from "../../src/db/prisma.js";

const request = supertest(app);

const testUser = {
  name: "Test User",
  email: "testauth@example.com",
  password: "password123",
  role: "candidate" as const,
};

let refreshToken: string;

beforeAll(async () => {
  await prisma.refreshToken.deleteMany({
    where: { user: { email: testUser.email } },
  });
  await prisma.user.deleteMany({
    where: { email: testUser.email },
  });
});

afterAll(async () => {
  await prisma.refreshToken.deleteMany({
    where: { user: { email: testUser.email } },
  });
  await prisma.user.deleteMany({
    where: { email: testUser.email },
  });
  await prisma.$disconnect();
});

// Register

describe("POST /api/v1/auth/register", () => {
  it("should register new user sccessfully", async () => {
    const res = await request.post("/api/v1/auth/register").send(testUser);

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.email).toBe(testUser.email);
    expect(res.body.data).not.toHaveProperty("passwordHash");
  });

  it("should reject duplicate email", async () => {
    const res = await request.post("/api/v1/auth/register").send(testUser);

    expect(res.status).toBe(409);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("Email already registered");
  });

  it("should reject invalid email", async () => {
    const res = await request.post("/api/v1/auth/register").send({
      ...testUser,
      email: "not-an-email",
    });

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it("should reject short password", async () => {
    const res = await request.post("/api/v1/auth/register").send({
      ...testUser,
      email: "another@example.com",
      password: "123",
    });

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it("should reject invalid role", async () => {
    const res = await request.post("/api/v1/auth/register").send({
      ...testUser,
      email: "another@example.com",
      role: "superadmin",
    });

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });
});

// Login

describe("POST /api/v1/auth/login", () => {
  it("should login successfully with correct credentials", async () => {
    const res = await request.post("/api/v1/auth/login").send({
      email: testUser.email,
      password: testUser.password,
    });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty("accessToken");
    expect(res.body.data).toHaveProperty("refreshToken");
    expect(res.body.data.user.email).toBe(testUser.email);

    // save refresh token for next tests
    refreshToken = res.body.data.refreshToken as string;
  });

  it("should reject wrong password", async () => {
    const res = await request.post("/api/v1/auth/login").send({
      email: testUser.email,
      password: "wrongpassword",
    });

    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it("should reject non-existent email", async () => {
    const res = await request.post("/api/v1/auth/login").send({
      email: "ghost@example.com",
      password: "password123",
    });

    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });
});

// Refresh

describe("POST /api/v1/auth/refresh", () => {
  it("should return a new access token with valid refresh token", async () => {
    const res = await request
      .post("/api/v1/auth/refresh")
      .send({ refreshToken });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty("accessToken");
  });

  it("should reject invalid refresh token", async () => {
    const res = await request
      .post("/api/v1/auth/refresh")
      .send({ refreshToken: "invalid.token.here" });

    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });
});

// Logout

describe("POST /api/v1/auth/logout", () => {
  it("should logout successfully", async () => {
    const res = await request
      .post("/api/v1/auth/logout")
      .send({ refreshToken });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("should not be able to refresh after logout", async () => {
    const res = await request
      .post("/api/v1/auth/refresh")
      .send({ refreshToken });

    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });
});
