const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routes/index');
const errorHandling = require('./middlewares/errorHandling');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hellow Word');
});

app.use(routers);

app.listen(3000, function () {
    console.log('Server running on port 3000');
}); 