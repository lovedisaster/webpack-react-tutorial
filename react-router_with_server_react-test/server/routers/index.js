const bodyParser = require('body-parser');
const express = require("express");
const config = require("../config");
var router = express.Router();

module.exports = function (app) {
      app.use("/",function (req, res, next) {
        res.render(config.paths.server_pages);
        next();
      });
      app.use("/list",function (req, res, next) {
        res.render(config.paths.server_pages);
        next();
      });
      return app;
  }
