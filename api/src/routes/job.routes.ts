import { Router } from "express";
import { z } from "zod";
import * as jobController from "../controllers/job.controller.js";
import { authenticate, authorize } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";

const router = Router();

const createJobSchema = z.object({
  title: z.string().min(3).max(200),
  description: z.string().min(10),
  location: z.string().max(200).optional(),
  jobType: z.enum(["full_time", "part_time", "remote", "contract"]),
  salaryMin: z.number().int().positive().optional(),
  salaryMax: z.number().int().positive().optional(),
  skillsRequired: z.array(z.string()).optional(),
});

const updateJobSchema = createJobSchema.partial();

router.get("/", jobController.getJobs);
router.get("/:id", jobController.getJobById);

router.post(
  "/",
  authenticate,
  authorize("recruiter"),
  validate(createJobSchema),
  jobController.createJob,
);

router.patch(
  "/:id",
  authenticate,
  authorize("recruiter"),
  validate(updateJobSchema),
  jobController.updateJob,
);

router.delete(
  "/:id",
  authenticate,
  authorize("recruiter"),
  jobController.deleteJob,
);

router.patch(
  "/:id/close",
  authenticate,
  authorize("recruiter"),
  jobController.closeJob,
);

export default router;
