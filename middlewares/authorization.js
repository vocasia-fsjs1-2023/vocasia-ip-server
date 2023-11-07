const { Customer } = require("../models");

async function isUserOwnTransaction(req, res, next) {
  try {
    const id = req.id;
    const param = req.params;
    const customerId = param.id;

    const findId = await Customer.findByPk(customerId);
    if (findId) {
      const customer = await Customer.findOne({ where: { id: customerId } });
      if (customer && customer.id === id) {
        next();
      } else {
        throw new Error("TRANSACTION INI BUKAN MILIK ANDA");
      }
    } else {
      throw new Error(`Tidak ada Transaction dengan id ${customerId}`);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = isUserOwnTransaction;
