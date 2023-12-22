const { Order } = require("../models");

async function isUserOwnOrder(req, res, next) {
  try {
    const userId = req.userId; 
    const orderId = req.params.id;

    const order = await Order.findOne({ where: { id: orderId, userId: userId } });

    if (order) {
      next();
    } else {
      console.log("Order not found or not owned by user:", orderId);
      throw new Error("Akses ditolak!");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = isUserOwnOrder;