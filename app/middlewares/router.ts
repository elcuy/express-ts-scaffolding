"use strict";

import { Application } from "express";

import routes from "../../routes/routes";

export default function(app: Application): Application {
  app.use("/", routes);
  return app;
}
