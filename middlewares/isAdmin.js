const { User } = require("../models");

async function isAdmin(req, res, next) {
  const userId = req.userId;

  try {
    const user = await User.findOne({ where: { id: userId } });

    if (user && user.isAdmin === true) {
      next();
    } else {
      next(new Error("ANDA BUKAN ADMIN"));
    }
  } catch (error) {
    next(error);
  }
}
module.exports = isAdmin;
