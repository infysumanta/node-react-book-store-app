const asyncHandler = require("express-async-handler");
const Product = require("../models/product.schema");

exports.getAllProduct = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const pageSize = 20;
  const count = await Product.countDocuments({});

  const allProducrs = await Product.find({})
    .select("-password")
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .sort("-createdAt");

  res.status(200).json({
    success: true,
    message: "Data Fetch Successfully",
    data: {
      products: allProducrs,
      page: page,
      total: count,
      pages: Math.ceil(count / pageSize),
    },
  });
});

exports.getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).select("-password");
  if (product) {
    res.status(200).json({
      success: true,
      message: "Product fetch Succesfully",
      data: product,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Product not Exist",
    });
  }
});
