const { User } = require("../models");

async function isAdmin(req, res, next) {
  const userId = req.userId;

  const admin = await User.findOne({ where: { id: userId } });
  if (admin.isAdmin === true) {
    next();
  } else {
    next(new Error("ANDA BUKAN ADMIN"));
  }
}

module.exports = isAdmin;