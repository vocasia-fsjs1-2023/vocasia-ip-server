async function errorHandling(error, req, res, next) {
  const errName = error?.name;
  const errMessage = error?.message;

  console.log(errMessage, errName);

  if (errName === "unauthorized") {
    res.status(401).json({ message: errMessage || "Unauthorized" });
    return;
  }

  if (errName === "forbidden") {
    res.status(403).json({ message: errMessage || "Forbidden" });
    return;
  }

  if (errName === "notFound") {
    res.status(404).json({ message: errMessage || "notFound" });
    return;
  }

  res.status(500).json({ message: errMessage || "Internal Server error" });
}

module.exports = errorHandling;
