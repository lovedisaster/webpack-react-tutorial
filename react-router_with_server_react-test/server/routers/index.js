const bodyParser = require('body-parser');
const express = require("express");
const config = require("../config");
var router = express.Router();

module.exports = function (app) {
      app.get("/",function (req, res) {
        res.render(config.paths.server_pages);
      });

      app.get("/list",function (req, res) {
        res.render(config.paths.server_pages);
      });

      app.get('/getTodoList', function (req, res) {
        res.json([
          {id: "Danny", TaskName: "Meeting With Danny", Time: "12:20pm"},
          {id: "John", TaskName: "Meeting With John", Time: "2:20pm"},
          {id: "Kids", TaskName: "Kids program", Time: "3:10pm"},
          {id: "Interview", TaskName: "Interview with Google", Time: "4:00pm"}
        ]);
      });

      return app;
  }
