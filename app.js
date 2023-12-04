const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routes/index");
const errorHandling = require("./middlewares/errorHandling");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routers);
app.use(errorHandling);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});