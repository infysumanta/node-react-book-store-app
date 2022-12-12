const { login, register } = require("../controllers/userController");

const router = require("express").Router();

router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
