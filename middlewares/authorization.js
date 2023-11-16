const { Todo } = require("../models");

async function authorization(req, res, next) {
    try {
      const userId = req.userId; 
      
      if (!userId) {
        return res.status(401).json({ error: "Anda harus masuk terlebih dahulu" });
      }

      if (userId) {
        next();
      } else {
        return res.status(403).json({ error: "Anda tidak memiliki izin untuk mengakses ini" });
      }
    } catch (error) {
      console.log(error);
      next(error); 
    }
 }

module.exports = authorization;
