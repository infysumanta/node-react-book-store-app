const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports = {
  verifyToken: async (req, res, next) => {
    let token =
      req.body.token || req.query.token || req.headers["authorization"];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials! Not authorized, no token available",
      });
    }

    try {
      token = token.replace(/^Bearer\s+/, "");
      const decoded = await jwt.decode(token, config.JWT_TOKEN);
      console.log(decoded);
      req.user = decoded;
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials! Not authorized, Token failed",
      });
    }
    next();
  },
};
