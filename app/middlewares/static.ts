"use strict";

import express from "express";

export default function(app: express.Application): express.Application {
  app.use(express.static("dist"));
  return app;
}
