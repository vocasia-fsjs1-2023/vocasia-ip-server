const bukuController = require("../../controllers/bukuController");
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");
const routes = require("express").Router();

routes.post("", authentication, isAdmin, bukuController.addbuku);
routes.get("", bukuController.listbuku);
routes.get("/:id", bukuController.bukubyid);
routes.patch("/:id", authentication, isAdmin, bukuController.updatebuku);
routes.delete("/:id", authentication, isAdmin, bukuController.deletebuku);

module.exports = routes;
