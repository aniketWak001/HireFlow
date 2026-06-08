import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const { JsonWebTokenError, TokenExpiredError } = jwt;
import logger from "../utils/logger.js";

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
    return;
  }

  if (err instanceof TokenExpiredError) {
    res.status(401).json({
      success: false,
      message: "Token expired",
    });
    return;
  }

  if (err instanceof JsonWebTokenError) {
    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
    return;
  }

  logger.error({ err }, "Unexpected error");
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}
