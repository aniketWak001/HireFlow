import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import { validate } from "../middleware/validate.js";
import { z } from "zod";
import rateLimit from "express-rate-limit";

const router = Router();

// stricter limit: 10 req per 15 min per IP
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: process.env.NODE_ENV === "test" ? 1000 : 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many attempts, please try again later",
  },
});

const registerSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(100),
  role: z.enum(["candidate", "recruiter"]),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

const tokenSchema = z.object({
  refreshToken: z.string().min(1),
});

router.post(
  "/register",
  authLimiter,
  validate(registerSchema),
  authController.register,
);
router.post("/login", authLimiter, validate(loginSchema), authController.login);
router.post(
  "/refresh",
  authLimiter,
  validate(tokenSchema),
  authController.refresh,
);
router.post(
  "/logout",
  authLimiter,
  validate(tokenSchema),
  authController.logout,
);

export default router;
