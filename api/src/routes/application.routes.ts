import { Router } from "express";
import { z } from "zod";
import * as applicationController from "../controllers/application.controller.js";
import { authenticate, authorize } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";

const router = Router();

const submitApplicationSchema = z.object({
  coverLetter: z.string().min(10).optional(),
});

const updateStatusSchema = z.object({
  status: z.enum(["applied", "reviewed", "interview", "hired", "rejected"]),
});

// candidate applies to a job
router.post(
  "/jobs/:id/apply",
  authenticate,
  authorize("candidate"),
  validate(submitApplicationSchema),
  applicationController.submitApplication,
);

// candidate views their own applications
router.get(
  "/applications",
  authenticate,
  authorize("candidate"),
  applicationController.getCandidateApplications,
);

// recruiter views applicants for their job
router.get(
  "/jobs/:id/applications",
  authenticate,
  authorize("recruiter"),
  applicationController.getJobApplications,
);

// recruiter updates application status
router.patch(
  "/applications/:id/status",
  authenticate,
  authorize("recruiter"),
  validate(updateStatusSchema),
  applicationController.updateApplicationStatus,
);

export default router;
