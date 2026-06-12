import type { Request, Response, NextFunction } from "express";
import * as resumeService from "../services/resume.service.js";
import { AppError } from "../middleware/errorHandler.js";

export async function uploadResume(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    if (!req.file) {
      throw new AppError(400, "No file uploaded");
    }

    const resume = await resumeService.uploadResume(
      req.user!.id,
      req.file.buffer,
      req.file.originalname,
    );

    res.status(201).json({ success: true, data: resume });
  } catch (error) {
    next(error);
  }
}

export async function getCandidateResumes(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const resumes = await resumeService.getCandidateResumes(req.user!.id);
    res.status(200).json({ success: true, data: resumes });
  } catch (error) {
    next(error);
  }
}

export async function deleteResume(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    await resumeService.deleteResume(req.params["id"] as string, req.user!.id);
    res
      .status(200)
      .json({ success: true, message: "Resume deleted successfully" });
  } catch (error) {
    next(error);
  }
}
