const OrderController = require("../../controllers/orderController");
const authentication = require("../../middlewares/authentication");
const { isBuyer, isSeller } = require("../../middlewares/checkRoleUser");
const isUserOwnOrder = require("../../middlewares/authorization");
const router = require("express").Router();

//User dengan role SELLER yang dapat melihat seluruh pesanan
router.get("/", authentication, isSeller, OrderController.getOrder);

//User dengan token valid dan role BUYER yang dapat membuat order
router.post("/", authentication, isBuyer, OrderController.createOrder);

//User dengan token valid && role BUYER && pemilik orderannya sendiri yang dapat mengakses API
router.get("/:id", authentication, isBuyer, isUserOwnOrder, OrderController.getOrderByID);
router.put("/:id", authentication, isBuyer, isUserOwnOrder, OrderController.updateOrder);
router.delete("/:id", authentication, isBuyer, isUserOwnOrder, OrderController.deleteOrder);

module.exports = router;
