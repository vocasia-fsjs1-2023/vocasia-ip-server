const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const secret = "rahasiabanget";
const bcrypt = require('bcrypt');
const { Todos,User } = require("./models");
const todosController = require('./controllers/todosController');
const userController = require('./controllers/userController');
const routes = require("./routes/index");
const validator = require('validator');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware
app.use(express.urlencoded({ extended: true })); // Middleware untuk mengurai data URL-encoded
app.use(express.json()); // Middleware untuk mengurai data JSON

// Routes
app.use(routes);

// Custom route
app.get("/", (req, res) => {
    res.send("Hello Word");
});

// Port
const port = 3000;

app.listen(port, () => {
    console.log(`Aplikasi contoh sedang mendengarkan port ${port}`);
});