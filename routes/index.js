const routes = require("express").Router();
const userRoutes = require("./users/index");
const produkRoutes = require("./produks/index");
const customerRoutes = require("./customers/index");
const transactionRoutes = require("./transactions/index");

routes.use("", userRoutes);
routes.use("/produk", produkRoutes);
routes.use("/customer", customerRoutes);
routes.use("/transaction", transactionRoutes);

module.exports = routes;
