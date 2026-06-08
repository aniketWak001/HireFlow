import "dotenv/config";
import app from "./app.js";
import prisma from "./db/prisma.js";
import { redis } from "./config/redis.js";
import logger from "./utils/logger.js";

async function start() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    logger.info("Postgres connected");

    await redis.connect();
    logger.info("Redis connected");

    app.listen(process.env.PORT || 5000, () => {
      logger.info(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    logger.error({ error }, "Startup failed");
    process.exit(1);
  }
}

start();
