async function errorHandling(error, req, res, next) {
    const errName = error?.name;
    const errMessage = error?.message;
  
    if (errName === "unauthorized") {
      return res.status(401).json({ message: errMessage ?? "Unauthorized" });
    }
  
    if (errName === "forbidden") {
      return res.status(403).json({ message: errMessage ?? "Forbidden" });
    }
  
    if (errName === "ReferenceError") {
      return res.status(404).json({ message: errMessage ?? "ReferenceError" });
    }
  
    if (!errName) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  
    return res.status(500).json({ message: `Internal Server Error: ${errMessage || "Internal Server Error"}` });
  };

  module.exports = errorHandling;