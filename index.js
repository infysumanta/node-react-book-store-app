require("dotenv").config();
const config = require("./config");
const app = require("./app");
const connectDB = require("./config/db");

connectDB();

app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});
