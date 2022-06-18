let express = require("express");
let router = express.Router();

const todos = [
	{
		id: 1,
		name: "Do something",
		completed: false,
	},
];

router.get("/", function () {
	console.log(todos);
	res.json(todos);
});

module.exports = router;
