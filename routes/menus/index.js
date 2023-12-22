const menuController = require("../../controllers/menu-controller");
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");
const routes = require("express").Router();

routes.post("", authentication, isAdmin, menuController.addMenu);
routes.get("", menuController.getMenu);
routes.get("/:kategori", menuController.getMenuKategori);
routes.put("/:id", authentication, isAdmin, menuController.updateMenu);
routes.delete("/:id", authentication, isAdmin, menuController.deleteMenu);

module.exports = routes;