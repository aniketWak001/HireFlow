import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import prisma from "./db/prisma.js";
import { redis } from "./config/redis.js";


async function start() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log("Postgres Connected");

    await redis.connect();
    console.log("Redis Connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server Running on port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.error("Startup Error:", error);
    process.exit(1);
  }
}

start();
