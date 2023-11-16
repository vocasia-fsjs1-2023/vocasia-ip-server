const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routers/index");
const errorHandling = require("./middlewares/errorHandling");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000;

app.get("/", (req, res, next) => {
  next(new Error("Test Error"));
});


app.use(routers);
app.use(errorHandling);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });