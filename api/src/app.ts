import cors from "cors";
import express from "express";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import { errorHandler } from "./middleware/errorHandler.js";
import authRoutes from "./routes/auth.routes.js";
import jobRoutes from "./routes/job.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import resumeRoutes from "./routes/resume.routes.js";
import { setupSwagger } from "./config/swagger.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://hireflow-frontend.vercel.app"],
    credentials: true,
  }),
);

app.use(
  helmet({
    contentSecurityPolicy: false, // disabled for Swagger UI to work
  }),
);

app.use(compression());

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// global rate limit - 100 req per 15 min per IP
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: process.env.NODE_ENV === "test" ? 10000 : 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests, please try again later",
  },
});

app.use(globalLimiter);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobRoutes);
app.use("/api/v1/resumes", resumeRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1", applicationRoutes);

setupSwagger(app);
app.use(errorHandler);

export default app;
