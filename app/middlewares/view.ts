"use strict";

import { Application } from "express";

export default function(app: Application): Application {
  app.set("view engine", "pug");
  return app;
}
