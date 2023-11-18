const { User } = require("../models");

async function isAdmin(req, res, next) {
  try {
    const adminId = req.id;

    const admin = await User.findOne({ where: { id: adminId } });
    if (admin.isAdmin === true) {
      next();
    } else {
      throw new Error("ANDA BUKAN ADMIN");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = isAdmin;
