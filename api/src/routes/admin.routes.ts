import { Router } from "express";
import * as adminController from "../controllers/admin.controller.js";
import { authenticate, authorize } from "../middleware/auth.js";

const router = Router();

router.get(
  "/analytics",
  authenticate,
  authorize("admin"),
  adminController.getAnalytics,
);

export default router;
