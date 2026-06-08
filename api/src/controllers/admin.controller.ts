import type { Request, Response, NextFunction } from "express";
import * as adminService from "../services/admin.service.js";

export async function getAnalytics(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const analytics = await adminService.getAnalytics();
    res.status(200).json({ success: true, data: analytics });
  } catch (error) {
    next(error);
  }
}
