const request = require("supertest");
const app = require("../index");

describe("POST /api", () => {
    test("It responds with the URL analysis", async () => {
      const newURL = await request(app)
        .post("/api")
        .send({
          url: "https://www.google.com/"
        });
      // make sure we add it correctly
      expect(newURL.statusCode).toBe(200);
    });
  });