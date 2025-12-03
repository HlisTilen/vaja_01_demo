const request = require("supertest");
const app = require("../src/server");

test("GET /hello returns JSON", async () => {
  const res = await request(app).get("/hello");
  expect(res.status).toBe(200);
  expect(res.body.message).toBe("Hello Backend");
});