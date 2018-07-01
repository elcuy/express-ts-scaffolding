"use strict";

import express from "express";

import middlewares from "./middlewares";

require("dotenv-safe").config();

const app = middlewares(express());

app.listen(3000, function () {
  console.log("=== SERVER STARTED ===");
});
