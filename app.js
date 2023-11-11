const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const errorHandling = require("./middlewares/errorHandling");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
app.use(errorHandling);

app.listen(port, () => {
  console.log(`Server connected ${port}`);
});
