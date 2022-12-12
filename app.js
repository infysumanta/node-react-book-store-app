const express = require("express");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const app = express();
const config = require("./config");
const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(express.json()); // middleware for json body handler
app.use(cors()); // avoinding cors

if (config.NODE_ENV === "production") {
  app.use(compression()); //to use gzip
} else {
  app.use(morgan("dev"));
}

// Configure all the Route
app.use("/api/auth", authRoutes);

// Error Middleware
app.use(notFound); //404 Error Handler Middleware
app.use(errorHandler); //custom error handler middleware

module.exports = app;
