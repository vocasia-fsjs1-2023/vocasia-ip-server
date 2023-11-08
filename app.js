const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routes/index");
const userRoutes = require("./routes/users");
const materiRoutes = require("./routes/materiPelajarans");
const reviewRoutes = require("./routes/reviews");
const { materi, review, user } = require("./models");
const materiController = require("./controllers/materiController");
const reviewController = require("./controllers/reviewController");
const userController = require("./controllers/userController");
const authorization = require("./middlewares/isAdmin");
const authentication= require("./middlewares/jwtMiddle");
const errorHandling= require("./middlewares/errorHandling");
const app = express();
const port = 3000;

app.use(bodyParser.text());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is ready!");
});

app.use(routers);
app.use('/', userRoutes); 
app.use('/', materiRoutes); 
app.use('/', reviewRoutes); 

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}...`);
});
