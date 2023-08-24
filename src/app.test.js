const app = require("./index");
const mongoose = require("mongoose");
const request = require("supertest");
const dotenv = require("dotenv");

dotenv.config({ path: "./src/config/config.env" });

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.CONNECTION_URL);
});

// get the movie rating (open api)
describe("GET /api/movie/:id", () => {
  it("should return rating of given movie", async () => {
    const res = await request(app).get("/api/movie/64e6ec6e78c816cf658161d6");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});

// Login
describe("POST /api/user/login", () => {
  it("should return a token", async () => {
    const res = await request(app).post("/api/user/login").send({
      email: "test@gmail.com",
      password: "22224444",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.token.length).toBeGreaterThan(0);
  });

  it("should return a token", async () => {
    const res = await request(app).post("/api/user/login").send({
      email: "test@gmail.com",
      password: "2222444",
    });
    expect(res.statusCode).toBe(401);
    expect(res.body.message.length).toBeGreaterThan(0);
  });
  
});


// sign up
describe("POST /api/user/signup", () => {
  it("should create a user", async () => {
    const res = await request(app).post("/api/user/signup").send({
      name: "thakur",
      email: "test@gmail.com",
      password: "22224444",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.message.length).toBeGreaterThan(0);
  });
});

// Get All movies
describe("GET /api/movie/getAllMovies", () => {
  let token = process.env.TOKEN;

  it("should return list of movies", async () => {
    const res = await request(app)
      .get("/api/movie/getAllMovies")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});

// add movie rating
describe("POST /api/movie/:id", () => {
  let token = process.env.TOKEN;

  it("should return a new rating", async () => {
    const res = await request(app)
      .post("/api/movie/64e6ec6e78c816cf658161d6")
      .send({
        rating: 4,
      })
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.data.title.length).toBeGreaterThan(0);
  });
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});
