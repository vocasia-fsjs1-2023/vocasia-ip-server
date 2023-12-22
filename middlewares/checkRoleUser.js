const { User } = require("../models");

async function isSeller(req, res, next) {
  try {
    const userId = req.userId; 
    const checkRole = await User.findOne({ where: { id: userId } });

    if (checkRole.role === "seller") {
      next();
    } else {
      throw new Error("Akses khusus seller");
    }
  } catch (error) {
    next(error);
  }
}

async function isBuyer(req, res, next) {
  try {
    const userId = req.userId; 
    const checkRole = await User.findOne({ where: { id: userId } });

    if (checkRole.role === "buyer") {
      next();
    } else {
      throw new Error("Akses khusus buyer!");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { isSeller, isBuyer };