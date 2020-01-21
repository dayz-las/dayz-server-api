const express = require("express");
const app = (exports.app = express());
const {
  getServerStatusController
} = require("./presenter/server-status.controller");

app.get("/api/server/status", getServerStatusController);

exports.start = () => {
  app.listen(8089);
};
