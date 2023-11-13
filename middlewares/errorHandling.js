async function errorHandling(error, req, res, next) {
  const errName = error?.name;
  const errMessage = error?.message;

  console.log(errName, errMessage);

  if (errName === "unauthorized") {
    res.status(401).json({ message: errMessage ?? "Unauthorized: User tidak terauthentikasi!" });
    return;
  }

  if (errName === "forbidden") {
    res.status(404).json({ message: errMessage ?? "Forbidden: Akses hanya untuk user admin!" });
  }

  if (errName === "ReferenceError") {
    res.status(403).json({ message: errMessage ?? "ReferenceError" });
  }

  res.status(500).json({ message: errMessage ?? "Internal Server Error" });
}

module.exports = errorHandling;
