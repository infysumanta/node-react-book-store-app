const express = require("express");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const app = express();
const path = require("path");
const config = require("./config");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");

// Middleware
app.use(express.json()); // middleware for json body handler
app.use(cors()); // avoinding cors

if (config.NODE_ENV === "production") {
  app.use(compression()); //to use gzip
} else {
  app.use(morgan("dev"));
}

// Configure all the Route
// Frontend Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Admin Routes
app.use("/api/admin", adminRoutes);

// Frontend Routes
app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// Error Middleware
app.use(notFound); //404 Error Handler Middleware
app.use(errorHandler); //custom error handler middleware

module.exports = app;
