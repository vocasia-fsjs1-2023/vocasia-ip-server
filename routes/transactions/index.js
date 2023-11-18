const transactionController = require("../../controllers/transaction-controller");
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");
const isTransaction = require("../../middlewares/isTransaction");
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
  isTransaction,
  transactionController.getTransaction
);
routes.put(
  "/:id",
  authentication,
  isTransaction,
  transactionController.updateTransaction
);
routes.delete(
  "/:id",
  authentication,
  isTransaction,
  transactionController.deleteTransaction
);

module.exports = routes;
