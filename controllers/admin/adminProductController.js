const asyncHandler = require("express-async-handler");
const User = require("../../models/users.schema");
const Product = require("../../models/product.schema");
const Review = require("../../models/review.schema");

exports.createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  if (product) {
    res.status(200).json({
      success: true,
      message: "Product saved Succesfully",
      data: product,
    });
  }
  res.status(409).json({
    success: false,
    message: "Something Went Wrong",
  });
});
exports.deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    const deleteProduct = await product.remove();
    res.status(200).json({
      success: true,
      message: "Product Deleted Succesfully",
      data: deleteProduct,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Product not Exist",
    });
  }
});
exports.updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).select("-password");

  if (product) {
    const {
      name,
      image,
      description,
      brand,
      category,
      price,
      reviews,
      countInStock,
    } = req.body;

    if (name) product.name = name;
    if (image) product.image = image;
    if (description) product.description = description;
    if (brand) product.brand = brand;
    if (category) product.category = category;
    if (price) product.price = price;
    if (reviews) product.reviews = reviews;
    if (countInStock) product.countInStock = countInStock;

    const updatedProduct = await product.save();
    updatedProduct.password = undefined;
    if (updatedProduct) {
      res.status(200).json({
        success: true,
        message: "Product fetch Succesfully",
        data: updatedProduct,
      });
    } else {
      res.status(409).json({
        success: false,
        message: "Something Went Wrong",
      });
    }
  } else {
    res.status(404).json({
      success: false,
      message: "Product not Exist",
    });
  }
});
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
