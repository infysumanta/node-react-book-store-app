const mongoose = require("mongoose");
const config = require(".");

const connectDB = () => {
  mongoose
    .connect(config.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((res) => {
      console.log(`MongoDB Connected: ${res.connection.host}`);
    })
    .catch((error) => {
      console.log(`Error: ${error.message}`);
      process.exit(1);
    });
};

module.exports = connectDB;
