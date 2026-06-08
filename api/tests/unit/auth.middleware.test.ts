import { describe, it, expect, vi } from "vitest";
import type { Request, Response, NextFunction } from "express";
import { authenticate, authorize } from "../../src/middleware/auth.js";
import { generateAccessToken } from "../../src/utils/token.js";

process.env.ACCESS_TOKEN_SECRET = "test_access_secret";
process.env.REFRESH_TOKEN_SECRET = "test_refresh_secret";

function mockReqResNext(overrides?: Partial<Request>) {
  const req = { headers: {}, ...overrides } as Request;
  const res = {} as Response;
  const next = vi.fn() as NextFunction;
  return { req, res, next };
}

describe("authenticate middleware", () => {
  it("should call next with AppError if no authorization header", () => {
    const { req, res, next } = mockReqResNext();
    authenticate(req, res, next);
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({ message: "No token provided" }),
    );
  });

  it("should call next with AppError if header does not start with Bearer", () => {
    const { req, res, next } = mockReqResNext({
      headers: { authorization: "Basic sometoken" },
    });
    authenticate(req, res, next);
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({ message: "No token provided" }),
    );
  });

  it("should attach user to request if token is valid", () => {
    const payload = { id: "user-123", role: "candidate" as const };
    const token = generateAccessToken(payload);
    const { req, res, next } = mockReqResNext({
      headers: { authorization: `Bearer ${token}` },
    });
    authenticate(req, res, next);
    expect(req.user).toMatchObject(payload);
    expect(next).toHaveBeenCalledWith();
  });

  it("should call next with AppError if token is invalid", () => {
    const { req, res, next } = mockReqResNext({
      headers: { authorization: "Bearer invalid.token.here" },
    });
    authenticate(req, res, next);
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({ message: "invalid token" }),
    );
  });
});

describe("authorize middleware", () => {
  it("should call next if user has required role", () => {
    const { req, res, next } = mockReqResNext();
    req.user = { id: "user-123", role: "recruiter" };
    authorize("recruiter")(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

  it("should call next with AppError 403 if user lacks required role", () => {
    const { req, res, next } = mockReqResNext();
    req.user = { id: "user-123", role: "candidate" };
    authorize("recruiter")(req, res, next);
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        statusCode: 403,
        message: "Forbidden: insufficient permissions",
      }),
    );
  });

  it("should call next with AppError 401 if no user on request", () => {
    const { req, res, next } = mockReqResNext();
    authorize("admin")(req, res, next);
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        statusCode: 401,
        message: "Unauthenticated",
      }),
    );
  });
});
