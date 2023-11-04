const jwt = require("jsonwebtoken");
const secret = "rahasiabanget";

async function authentication(req, res, next) {
  try {
    const header = req.headers;
    const bearer = header.authorization;
    const token = bearer.slice(7);
    const decoded = jwt.verify(token, secret);

    // console.log("Token:", decoded);

    req.userId = decoded.id;
    req.email = decoded.email;

    next();
  } catch (error) {
    next(error);
  }
}


module.exports = authentication;