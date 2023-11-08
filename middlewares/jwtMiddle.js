const jwt = require("jsonwebtoken");
const secret = "your-256-bit-secret";

async function authentication(req, res, next) {
  try {
    const header = req.headers;
    const bearer = header.authorization;
    const token = bearer.slice(7);
    const decoded = jwt.verify(token, secret);

    req.userId = decoded.id;
    req.email = decoded.email;
    req.admin = decoded.isAdmin;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;