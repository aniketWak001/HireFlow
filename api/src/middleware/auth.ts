import type { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/token.js";
import { AppError } from "./errorHandler.js";

export function authenticate(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      throw new AppError(401, "No token provided");
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      throw new AppError(401, "No token provided");
    }

    const payload = verifyAccessToken(token);
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
}

export function authorize(...roles: ("candidate" | "recruiter" | "admin")[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      return next(new AppError(401, "Unauthenticated"));
    }

    if (!roles.includes(req.user.role)) {
      return next(new AppError(403, "Forbidden: insufficient permissions"));
    }

    next();
  };
}
