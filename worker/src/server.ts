import { Queue } from "bullmq";

const queue = new Queue("emails", {
  connection: {
    host: "localhost",
    port: 6379,
  },
});

async function run() {
  await queue.add("test-job", {
    message: "Hello Worker",
  });

  console.log("Job Added");
}

run();
