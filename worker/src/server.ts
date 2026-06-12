import "dotenv/config";
import { resumeWorker } from "./workers/resume.worker.js";
import { emailWorker } from "./workers/email.worker.js";

console.log("Worker process started");
console.log(`Resume worker: ${resumeWorker.name}`);
console.log(`Email worker: ${emailWorker.name}`);

process.on("SIGTERM", async () => {
  console.log("SIGTERM received, closing workers...");
  await resumeWorker.close();
  await emailWorker.close();
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("SIGINT received, closing workers...");
  await resumeWorker.close();
  await emailWorker.close();
  process.exit(0);
});
