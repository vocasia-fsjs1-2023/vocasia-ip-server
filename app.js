const express = require("express");
const routers = require("./routes/index");
const errorHandling = require("./middlewares/errorHandling");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Individual Project Server</h1>");
});

app.use(routers);
app.use(errorHandling);

app.listen(port, () => {
  console.log(`Started server at on port ${port}`);
});
