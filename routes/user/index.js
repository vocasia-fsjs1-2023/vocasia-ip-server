const userController = require("../../controllers/auth");
const routes = require("express").Router();

routes.post("/register", userController.register);
routes.post("/login", userController.login);

module.exports = routes;
