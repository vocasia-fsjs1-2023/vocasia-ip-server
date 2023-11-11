const jwt = require("jsonwebtoken");
const secret = "rahasia";

async function authentication(req, res, next) {
  try {
    const headers = req.headers;
    const bearer = headers.authorization;

    if (bearer && bearer.startsWith("Bearer ")) {
      const token = bearer.slice(7);

      try {
        const decode = jwt.verify(token, secret);
        req.userId = decode.id;
        req.email = decode.email;
        next();
      } catch (error) {
        res.status(401).json({ error: "Token JWT tidak valid" });
      }
    } else {
      res.status(401).json({ error: "Token JWT tidak valid" });
    }
  } catch (error) {
    next(error);
  }
}
module.exports = authentication;
