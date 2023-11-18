const customerController = require("../../controllers/customer-controller");
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");
const isAdmin = require("../../middlewares/isAdmin");
const routes = require("express").Router();

routes.post("", authentication, customerController.addTransaction);
routes.get("", authentication, isAdmin, customerController.getCustomer);
routes.get(
  "/:id",
  authentication,
  authorization,
  customerController.getCustomerId
);
routes.patch(
  "/:id",
  authentication,
  isAdmin,
  customerController.updatePembayaran
);
routes.patch(
  "/:id",
  authentication,
  isAdmin,
  customerController.updatePemesanan
);
routes.delete("/:id", authentication, isAdmin, customerController.deleteProduk);

module.exports = routes;
