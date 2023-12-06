// middleware/errorHandler.js

function errorHandler(err, req, res, next) {
    console.error(err.stack); // Log error
    res.status(500).json({ message: 'Internal Server Error' });
  }
  
  module.exports = errorHandler;
  