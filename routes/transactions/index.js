const transactionController = require("../../controllers/transaction-controller");
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");
const isOwnOrder = require("../../middlewares/isOrderOwn");
const routes = require("express").Router();

routes.post(
  "/:id",
  authentication,
  authorization,
  transactionController.addTransaction
);
routes.get(
  "/:id",
  authentication,
  authorization,
  transactionController.getTransaction
);
routes.put(
  "/:id",
  authentication,
  isOwnOrder,
  transactionController.updateTransaction
);
routes.delete(
  "/:id",
  authentication,
  isOwnOrder,
  transactionController.deleteTransaction
);

module.exports = routes;
