import "dotenv/config";
import http from "http";
import { resumeWorker } from "./workers/resume.worker.js";
import { emailWorker } from "./workers/email.worker.js";

console.log("Worker process started");
console.log(`Resume worker: ${resumeWorker.name}`);
console.log(`Email worker: ${emailWorker.name}`);

// minimal HTTP server so Render keeps the service alive
const PORT = process.env.PORT ?? 3001;
const server = http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "ok", workers: ["resume", "email"] }));
});

server.listen(PORT, () => {
  console.log(`Worker health server running on port ${PORT}`);
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM received, closing workers...");
  await resumeWorker.close();
  await emailWorker.close();
  server.close();
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("SIGINT received, closing workers...");
  await resumeWorker.close();
  await emailWorker.close();
  server.close();
  process.exit(0);
});
