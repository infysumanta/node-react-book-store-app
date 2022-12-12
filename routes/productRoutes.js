const {
  getAllProduct,
  getProductById,
} = require("../controllers/productController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = require("express").Router();
router.use(verifyToken);

router.route("/").get(getAllProduct);
router.route("/:id").get(getProductById);
module.exports = router;
