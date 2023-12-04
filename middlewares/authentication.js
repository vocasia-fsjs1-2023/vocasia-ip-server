const jwt = require("jsonwebtoken");
const secret = "rahasia";

async function authentication(req, res, next) {
    try {
      const headers = req.headers;
      const bearer = headers.authorization;
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