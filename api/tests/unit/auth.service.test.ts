import { describe, it, expect } from "vitest";
import { hashPassword, comparePassword } from "../../src/utils/hash.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../../src/utils/token.js";

// set required env vars for token utils
process.env.ACCESS_TOKEN_SECRET = "test_access_secret";
process.env.REFRESH_TOKEN_SECRET = "test_refresh_secret";
process.env.ACCESS_TOKEN_EXPIRES_IN = "15m";
process.env.REFRESH_TOKEN_EXPIRES_IN = "7d";

describe("hashPassword", () => {
  it("should hash a password", async () => {
    const hash = await hashPassword("mypassword");
    expect(hash).not.toBe("mypassword");
    expect(hash.length).toBeGreaterThan(0);
  });

  it("should produce different hashes for same password", async () => {
    const hash1 = await hashPassword("mypassword");
    const hash2 = await hashPassword("mypassword");
    expect(hash1).not.toBe(hash2);
  });
});

describe("comparePassword", () => {
  it("should return true for correct password", async () => {
    const hash = await hashPassword("mypassword");
    const result = await comparePassword("mypassword", hash);
    expect(result).toBe(true);
  });

  it("should return false for wrong password", async () => {
    const hash = await hashPassword("mypassword");
    const result = await comparePassword("wrongpassword", hash);
    expect(result).toBe(false);
  });
});

describe("generateAccessToken / verifyAccessToken", () => {
  it("should generate and verify a valid access token", () => {
    const payload = { id: "user-123", role: "candidate" as const };
    const token = generateAccessToken(payload);
    const decoded = verifyAccessToken(token);
    expect(decoded.id).toBe(payload.id);
    expect(decoded.role).toBe(payload.role);
  });
});

describe("generateRefreshToken / verifyRefreshToken", () => {
  it("should generate and verify a valid refresh token", () => {
    const payload = { id: "user-123", role: "recruiter" as const };
    const token = generateRefreshToken(payload);
    const decoded = verifyRefreshToken(token);
    expect(decoded.id).toBe(payload.id);
    expect(decoded.role).toBe(payload.role);
  });
});