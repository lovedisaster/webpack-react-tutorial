const bodyParser = require('body-parser');
const express = require("express");
const config = require("../config");
var router = express.Router();
var ReactDomString = require("../../dist/main-server");


module.exports = function (app) {
      app.use("/home",function (req, res, next) {
        res.render(config.paths.server_pages, { ReactDom : ReactDomString.default});
        next();
      });
      app.use("/list",function (req, res, next) {
        res.render(config.paths.server_pages);
        next();
      });
      return app;
  }
