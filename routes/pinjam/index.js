const pinjamController = require("../../controllers/pinjamController");
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");
const authorization = require("../../middlewares/authorization");
const routes = require("express").Router();

routes.post("", authentication, pinjamController.addpinjam);
routes.get("", pinjamController.listpinjam);
routes.get("/:id", pinjamController.pinjambyid);
routes.put(
  "/:id",
  authentication,
  authorization,
  pinjamController.updatepinjam
);
routes.patch("/:id", authentication, isAdmin, pinjamController.updatestatus);
routes.delete("/:id", authentication, isAdmin, pinjamController.deletepinjam);

module.exports = routes;
