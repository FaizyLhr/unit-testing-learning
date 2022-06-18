const express = require("express");
const app = express();

var cookieParser = require("cookie-parser");

const indexRouter = require("./routes/index");
const todosRouter = require("./routes/todos");

const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// app.use(logger("dev"));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/todos", todosRouter);

module.exports = app;

app.listen(port, () => {
	console.log(`App is listening on port: ${port}`);
});
