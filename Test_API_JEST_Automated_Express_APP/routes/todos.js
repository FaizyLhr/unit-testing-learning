let express = require("express");
let router = express.Router();

const todos = [
	{
		id: 1,
		name: "Do something",
		completed: false,
	},
];

router.get("/", function (req, res, next) {
	res.json(todos);
});

router.get("/:id", function (req, res, next) {
	const foundTodo = todos.find((todo) => todo.id === Number(req.params.id));

	if (!foundTodo) {
		res.status(404).send("Not Found");
		next();
	}

	res.json(foundTodo);
});

router.post("/", function (req, res, next) {
	const { body } = req;

	if (typeof body.name !== "string") {
		res.status(422).send("Validation Error");
		next();
	}

	const newTodo = {
		id: todos.length + 1,
		name: body.name,
		completed: false,
	};

	todos.push(newTodo);

	res.status(201).send(newTodo);
});

module.exports = router;
