var chai = require("chai");

const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;

// #####ASSERT###########

describe("Aspect Check", () => {
	let username = "practices";

	let myList = {
		item: [
			{
				id: 1,
				name: "demo",
			},
		],
		title: "User list",
	};

	it("String Checks", () => {
		assert.typeOf(username, "String");
	});

	it("String Equal or Not", () => {
		assert.equal(username, "practices");
	});

	it("Length", () => {
		assert.lengthOf(myList.item, 1);
	});
});

// $$$$$$$$$$$$$$$$$ SHOULD $$$$$$$$$$$

describe("Should Check", () => {
	let username = "practices";
	let userStatus = true;

	let myList = {
		item: [
			{
				id: 1,
				name: "demo",
			},
		],
		title: "User list",
	};

	it("Check String", () => {
		username.should.be.a("string");
	});

	it("Check String", () => {
		userStatus.should.not.be.a("string");
	});

	it("Check boolean", () => {
		userStatus.should.be.a("boolean");
	});

	it("Equal Check", () => {
		username.should.equal("practices");
	});

	it("Length", () => {
		myList.should.have.property("item").with.lengthOf(1);
	});
});

// ##########EXPECT############
describe("Should Check", () => {
	let username = "practices";
	let userStatus = true;

	let myList = {
		item: [
			{
				id: 1,
				name: "demo",
			},
		],
		title: "User list",
	};

	it("String matches", () => {
		expect(username).to.be.a("string");
	});

	it("Equal matches", () => {
		expect(username).to.equal("practices");
	});

	it("Length matches", () => {
		expect(username).to.lengthOf(9);
	});

	it("Object matches", () => {
		expect(myList).to.have.property("item").with.lengthOf(1);
	});

	it("API Object matches", () => {
		expect(myList).to.have.all("item", "title", "details");
	});
});
