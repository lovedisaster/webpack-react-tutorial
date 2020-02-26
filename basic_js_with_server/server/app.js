const express = require('express');
let app = express();
const path = require('path');
const volleyball = require('volleyball');
const routers = require("./routers");

const config = require('./config');
const bodyParser = require('body-parser');
const { createServer } = require('http');
const static = require('node-static');


app.use(volleyball);
app.set('views', config.paths.server_pages);
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app = routers(app);

const server = createServer(app);
server.listen(process.env.PORT || 2999, function () {
  console.log("Server is running on port 2999");
});




