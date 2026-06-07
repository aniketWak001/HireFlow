import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

app.get("/api/health", (_, res) => {
  res.status(200).json({ status: "ok" });
});

app.use(errorHandler);

export default app;