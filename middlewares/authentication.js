const jwt = require("jsonwebtoken");
const secret = "sangatrahasia";

async function authentication(req, res, next) {
  try {
    const header = req.headers;
    const bearer = header.authorization;
    const token = bearer.slice(7);
    const decoded = jwt.verify(token, secret);

    req.userId = decoded.id;
    req.email = decoded.email;
    next();
  } catch (error) {
    next({
      name: "unauthorized",
      message: "user tidak terauthentikasi ",
    });
  }
}

module.exports = authentication;
