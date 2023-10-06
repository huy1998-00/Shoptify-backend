const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");

const app = express();

//init middleware============

// log request
// app.use(morgan("combined"));
app.use(morgan("dev"));

//Protect header
app.use(helmet());

// compress data size response
app.use(compression());

//=============
// init db

//handle errr

//handle router

app.get("/", (req, res, next) => {
  const strCompres = "hello asd";

  return res.status(200).json({
    message: "Hello world",
    metadata: strCompres.repeat(10000),
  });
});

module.exports = app;
