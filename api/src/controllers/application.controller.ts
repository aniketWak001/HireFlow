import type { Request, Response, NextFunction } from "express";
import * as applicationService from "../services/application.service.js";

export async function submitApplication(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const application = await applicationService.submitApplication(
      req.user!.id,
      req.params["id"] as string,
      req.body,
    );
    res.status(201).json({ success: true, data: application });
  } catch (error) {
    next(error);
  }
}

export async function getCandidateApplications(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const applications = await applicationService.getCandidateApplications(
      req.user!.id,
    );
    res.status(200).json({ success: true, data: applications });
  } catch (error) {
    next(error);
  }
}

export async function getJobApplications(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const applications = await applicationService.getJobApplications(
      req.params["id"] as string,
      req.user!.id,
    );
    res.status(200).json({ success: true, data: applications });
  } catch (error) {
    next(error);
  }
}

export async function updateApplicationStatus(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const application = await applicationService.updateApplicationStatus(
      req.params["id"] as string,
      req.user!.id,
      req.body,
    );
    res.status(200).json({ success: true, data: application });
  } catch (error) {
    next(error);
  }
}
