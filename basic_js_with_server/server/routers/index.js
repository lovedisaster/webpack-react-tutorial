const bodyParser = require('body-parser');
const express = require("express");
const config = require("../config");
var router = express.Router();

module.exports = function (app) {
      app.use('/home',function (req, res, next) {
        res.render(config.paths.server_pages);
        next();
      });

      return app;
  }
