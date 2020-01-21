const express = require("express");
const app = (exports.app = express());
const {
  getServerStatusController
} = require("./src/presenter/server-status.controller");

app.get("/api/server/status", getServerStatusController);

app.listen(8089);
