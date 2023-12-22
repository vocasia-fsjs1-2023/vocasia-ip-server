const customerController = require("../../controllers/customer-controller");
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");
const isAdmin = require("../../middlewares/isAdmin");
const routes = require("express").Router();

routes.post("", customerController.addCustomer);
routes.get("", authentication, isAdmin, customerController.getCustomer);
routes.get(
  "/:id",
  authentication,
  authorization,
  customerController.getCustomerId
);
routes.put(
  "/:id",
  authentication,
  isAdmin,
  customerController.updateStatusBayar
);
routes.patch(
  "/:id",
  authentication,
  isAdmin,
  customerController.updateStatusPesan
);

module.exports = routes;