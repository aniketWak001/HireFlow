import "dotenv/config";
import { Worker, type Job } from "bullmq";
import { Resend } from "resend";

const connection = {
  host: process.env.REDIS_HOST ?? "localhost",
  port: Number(process.env.REDIS_PORT ?? 6379),
};

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailJobData {
  type: "application_received" | "status_change" | "interview_invite";
  payload: Record<string, string>;
}

async function processEmail(job: Job<EmailJobData>) {
  const { type, payload } = job.data;

  console.log(`Processing email: ${type}`);

  let subject = "";
  let html = "";
  const to = payload["email"] ?? process.env.EMAIL_FROM!;

  if (type === "application_received") {
    subject = `Application Received — ${payload["jobTitle"] ?? "Position"}`;
    html = `
      <h2>Application Received</h2>
      <p>Your application for <strong>${payload["jobTitle"]}</strong> has been received.</p>
      <p>We will review your application and get back to you soon.</p>
    `;
  } else if (type === "status_change") {
    subject = `Application Status Updated`;
    html = `
      <h2>Application Status Updated</h2>
      <p>Your application status has been updated to: <strong>${payload["status"]}</strong></p>
    `;
  } else if (type === "interview_invite") {
    subject = `Interview Invitation — ${payload["jobTitle"] ?? "Position"}`;
    html = `
      <h2>Interview Invitation</h2>
      <p>Congratulations! You have been invited for an interview for <strong>${payload["jobTitle"]}</strong>.</p>
    `;
  }

  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to,
    subject,
    html,
  });

  console.log(`Email sent: ${type} to ${to}`);
}

export const emailWorker = new Worker<EmailJobData>(
  "email-notifications",
  processEmail,
  {
    connection,
    concurrency: 10,
  },
);

emailWorker.on("completed", (job) => {
  console.log(`Email job ${job.id} completed`);
});

emailWorker.on("failed", (job, error) => {
  console.error(`Email job ${job?.id} failed:`, error.message);
});
