import request from "supertest";
import app from "../../src/app.js";

describe("Health Check", () => {
    it("Should return status ok", async ()=> {
       const res = await request(app).get("/health");

       expect(res.status).toBe(200);

       expect(res.body).toEqual({
        status: "ok",
       });
    });
});