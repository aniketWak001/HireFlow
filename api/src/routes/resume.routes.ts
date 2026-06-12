import { Router } from "express";
import * as resumeController from "../controllers/resume.controller.js";
import { authenticate, authorize } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const router = Router();

router.post(
  "/",
  authenticate,
  authorize("candidate"),
  upload.single("resume"),
  resumeController.uploadResume,
);

router.get(
  "/",
  authenticate,
  authorize("candidate"),
  resumeController.getCandidateResumes,
);

router.delete(
  "/:id",
  authenticate,
  authorize("candidate"),
  resumeController.deleteResume,
);

export default router;
