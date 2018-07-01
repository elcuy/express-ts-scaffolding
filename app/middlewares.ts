"use strict";

import { Application } from "express";

import router from "./middlewares/router";
import staticMiddleware from "./middlewares/static";
import view from "./middlewares/view";

const middlewares: Middleware[] = [
  staticMiddleware,
  view,
  router
];

interface Middleware {
  (app: Application): Application;
}

export default function(app: Application): Application {
  return middlewares.reduce((app, middleware) => middleware(app), app);
}
