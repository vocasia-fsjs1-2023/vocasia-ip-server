const express = require("express");
const routers = require("./routes/index");
const errorHandling = require("./middlewares/errorHandling");

const app = express();

app.use(express.json());
app.use(routers);
app.use(errorHandling);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });