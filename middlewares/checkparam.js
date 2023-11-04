function checkParameter(req, res, next) {
    const userId = req.params.id;
  
    if (isNaN(userId)) {
     
      next('route');
    } else {
      
      next();
    }
  }
  module.exports = checkParameter;