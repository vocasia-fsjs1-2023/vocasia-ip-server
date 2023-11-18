const routes = require("express").Router();

const userRoutes = require("./user/index");
const bukuRoutes = require("./buku/index");
const pinjamRoutes = require("./pinjam/index");

routes.use("", userRoutes);
routes.use("/buku", bukuRoutes);
routes.use("/pinjam", pinjamRoutes);

module.exports = routes;
