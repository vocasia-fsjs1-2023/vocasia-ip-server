const express = require("express");
const errorHandling = require("./middlewares/errorHandling");
const router = require("./routes/index");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(errorHandling);
app.use(router);

app.listen(3000, function () {
  console.log("Server Running on port 3000");
});
