"use strict";

import context from "jest-context";

context("Jest configuration test", function() {
  context("when running the jest configuration test", function() {
    it("gets executed and asserted correctly", function() {
      return expect(true).toEqual(true);
    });
  });
});
