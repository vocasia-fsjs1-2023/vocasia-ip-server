const routes = require("express").Router();
const userRoutes = require("./users/index");
const menuRoutes = require("./menus/index");
const customerRoutes = require("./customers/index");
const transactionRoutes = require("./transactions/index");

routes.use("", userRoutes);
routes.use("/menu", menuRoutes);
routes.use("/customer", customerRoutes);
routes.use("/transaction", transactionRoutes);

module.exports = routes;
