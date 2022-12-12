const {
  getAllProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/admin/adminProductController");
const {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controllers/admin/adminUserController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = require("express").Router();
router.use(verifyToken);

// Admin Users
// api/admin/users?page=1
router.route("/users").get(getAllUsers);
// api/admin/users/e434874124jduyud8w9w9i
router.route("/users/:id").get(getUserById).delete(deleteUser).put(updateUser);

// Admin Products
// api/admin/products?page=1
router.route("/products").get(getAllProduct).post(createProduct);
// api/admin/products/e434874124jduyud8w9w9i
router
  .route("/products/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);
module.exports = router;
