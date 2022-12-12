module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI:
    process.env.MONGO_URI || "mongodb://localhost/node-react-store-app",
  NODE_ENV: process.env.NODE_ENV || "production",
  JWT_TOKEN: process.env.JWT_TOKEN || "thisisjwttoken",
};
