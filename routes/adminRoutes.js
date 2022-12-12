const {
  getAllUsers,
  getUserById,
  deleteUser,
} = require("../controllers/admin/adminUserController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = require("express").Router();
router.use(verifyToken);

// api/admin/users?page=1
router.route("/users").get(getAllUsers);
// api/admin/users/e434874124jduyud8w9w9i
router.route("/users/:id").get(getUserById).delete(deleteUser).put(updateUser);

module.exports = router;
