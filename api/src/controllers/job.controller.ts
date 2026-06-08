import type { Request, Response, NextFunction } from "express";
import * as jobService from "../services/job.service.js";

export async function createJob(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const job = await jobService.createJob(req.user!.id, req.body);
    res.status(201).json({ success: true, data: job });
  } catch (error) {
    next(error);
  }
}

export async function getJobs(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const search =
      typeof req.query["search"] === "string" ? req.query["search"] : undefined;
    const jobType =
      typeof req.query["jobType"] === "string"
        ? req.query["jobType"]
        : undefined;
    const location =
      typeof req.query["location"] === "string"
        ? req.query["location"]
        : undefined;
    const cursor =
      typeof req.query["cursor"] === "string" ? req.query["cursor"] : undefined;
    const limitRaw =
      typeof req.query["limit"] === "string" ? req.query["limit"] : undefined;

    const result = await jobService.getJobs({
      search,
      jobType: jobType as
        | "full_time"
        | "part_time"
        | "remote"
        | "contract"
        | undefined,
      location,
      cursor,
      limit: limitRaw !== undefined ? parseInt(limitRaw) : undefined,
    });

    res.status(200).json({ success: true, ...result });
  } catch (error) {
    next(error);
  }
}

export async function getJobById(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const job = await jobService.getJobById(req.params["id"] as string);
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    next(error);
  }
}

export async function updateJob(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const job = await jobService.updateJob(
      req.params["id"] as string,
      req.user!.id,
      req.body,
    );
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    next(error);
  }
}

export async function deleteJob(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    await jobService.deleteJob(req.params["id"] as string, req.user!.id);
    res
      .status(200)
      .json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    next(error);
  }
}

export async function closeJob(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const job = await jobService.closeJob(
      req.params["id"] as string,
      req.user!.id,
    );
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    next(error);
  }
}
