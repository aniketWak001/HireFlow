import dotenv from "dotenv"
import app from "./app.js";
import { pool } from "./config/postgres.js";
import { redis } from "./config/redis.js";

dotenv.config();

async function start() {
    try {
        await pool.query("SELECT NOW()");
        console.log("Postgres Connected");

        await redis.connect();
        console.log("Redis Connected");

        app.listen(process.env.PORT || 5000, () => {
            console.log("Server Running");
        })
    } catch (error) {
        console.error("Startup Error:", error);
        process.exit(1);
    }    
}

start();