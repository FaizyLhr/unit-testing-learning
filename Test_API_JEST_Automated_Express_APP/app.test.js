const request = require("supertest");
const app = require("./app");

// it("should run", () => {});

describe("Todo's API", () => {
	it("GET /todos  --> array todo's", () => {
		return request(app)
			.get("/todos")
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
							completed: expect.any(Boolean),
						}),
					])
				);
			});
	});

	it("GET /todos/id  --> specific todo by Id", () => {
		return request(app)
			.get("/todos/1")
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body).toEqual(
					expect.objectContaining({
						name: expect.any(String),
						completed: expect.any(Boolean),
					})
				);
			});
	});

	it("GET /todos/id  --> 404 if not found", () => {
		return request(app).get("/todos/99999").expect(404);
	});

	it("POST /todos  --> create todo", () => {
		return request(app)
			.post("/todos")
			.send({
				name: "do dishes",
			})
			.expect("Content-Type", /json/)
			.expect(201)
			.then((response) => {
				expect(response.body).toEqual(
					expect.objectContaining({
						id: expect.any(Number),
						name: "do dishes",
						completed: false,
					})
				);
			});
	});

	it("POST /todos  --> Validates request body", () => {
		return request(app)
			.post("/todos")
			.send({
				name: 123,
			})
			.expect(422);
	});
});
