const {
  login,
  register,
  authVerifyUser,
} = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.route("/register").post(register);
router.route("/login").post(login);

router.route("/auth-verify").post(verifyToken, authVerifyUser);

module.exports = router;
