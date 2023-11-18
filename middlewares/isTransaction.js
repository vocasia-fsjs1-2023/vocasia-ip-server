const { Transaction } = require("../models");

async function isTransaction(req, res, next) {
  try {
    const id = req.id;
    const param = req.params;
    const orderId = param.id;

    const findId = await Transaction.findOne({ where: { customerId: id } });
    if (findId) {
      const order = await Transaction.findByPk(orderId);
      if (order && order.customerId == id) {
        return next();
      } else {
        throw new Error("ORDER INI BUKAN MILIK ANDA");
      }
    } else {
      throw new Error(`Tidak ada Order dengan CustomerId ${id}`);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = isTransaction;
