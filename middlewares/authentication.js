const jwt = require("jsonwebtoken");
const secret = "cafe-fahri";

async function authentication(req, res, next) {
  try {
    const header = req.headers;
    const bearer = header.authorization;
    const token = bearer.slice(7);
    const decoded = jwt.verify(token, secret);

    // ID
    req.id = decoded.id;

    // Admin
    req.email = decoded.email;
    req.admin = decoded.isAdmin;

    // Customer
    req.name = decoded.name;
    req.noMeja = decoded.noMeja;
    req.totalPrice = decoded.totalPrice;

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
