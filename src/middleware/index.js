const express = require("express");
const morgan = require("morgan");

const applyMiddleware = (app) => {
  app.use(express.json());
  app.use(morgan("dev"));
};

module.exports = applyMiddleware;
