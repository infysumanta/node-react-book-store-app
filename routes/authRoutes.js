const { login, register } = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.route("/register").post(register);
router.route("/login").post(login);

router.route("/auth").post(verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Token Verified Successfully",
  });
});

module.exports = router;
