const express = require('express');
const bodyParser = require('body-parser');
const routers = require("./routers/index");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.use(routers);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
