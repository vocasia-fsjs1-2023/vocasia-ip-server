const jwt = require("jsonwebtoken");
const secret = "asdfghjkl";

async function authentication(req, res, next) {
  try {
    const headers = req.headers;
    const bearer = headers.authorization;

    if (bearer) {
      const token = bearer.slice(7);
      console.log(token);

      const decodedToken = jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          console.error(err);
          return res.status(401).json("Error verifikasi!");
        } else {
          
          console.log("Decoded token:", decoded);
          req.userId = decoded.id;
          req.email = decoded.email;
          
          next();
        }
      });
    } else {
      return res.status(401).json("Token tidak valid!");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;