const routes = require("express").Router();
const userRoutes = require("./user/index");
const todoRoutes = require("./todo/index");

routes.use("", userRoutes);
routes.use("/todos", todoRoutes);

module.exports = routes;
