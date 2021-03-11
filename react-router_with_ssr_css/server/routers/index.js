const express = require("express");
const config = require("../config");
var ReactDomString = require("../../dist/main-server");


module.exports = function (app) {
      app.use("/home",function (req, res, next) {
        res.render("index", { ReactDom : ReactDomString.default});
        next();
      });
      return app;
  }
