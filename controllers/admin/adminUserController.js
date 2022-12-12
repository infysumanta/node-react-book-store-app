const asyncHandler = require("express-async-handler");
const User = require("../../models/users.schema");

exports.getAllUsers = asyncHandler(async (req, res) => {
  // api/admin/users?page=1
  const page = Number(req.query.page) || 1;
  const pageSize = 20;
  const count = await User.countDocuments({});

  const allUsers = await User.find({})
    .select("-password")
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .sort("-createdAt");

  res.status(200).json({
    success: true,
    message: "Data Fetch Successfully",
    data: {
      users: allUsers,
      page: page,
      total: count,
      pages: Math.ceil(count / pageSize),
    },
  });
});
exports.getUserById = asyncHandler(async (req, res) => {
  // api/admin/e434874124jduyud8w9w9i
  const userId = req.params.id;
  const user = await User.findById(userId).select("-password");
  if (user) {
    res.status(200).json({
      success: true,
      message: "User fetch Succesfully",
      data: user,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "User not Exist",
    });
  }
});
exports.deleteUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (user) {
    const deletedUser = await user.remove();
    res.status(200).json({
      success: true,
      message: "User Deleted Succesfully",
      data: deletedUser,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "User not Exist",
    });
  }
});
exports.updateUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId).select("-password");

  if (user) {
    const { name, email, isAdmin } = req.body;
    user.name = name;
    user.email = email;
    user.isAdmin = isAdmin;
    user.isConfirmed = email === user.email;
    const updatedUser = await user.save();
    updatedUser.password = undefined;
    if (updatedUser) {
      res.status(200).json({
        success: true,
        message: "User fetch Succesfully",
        data: updatedUser,
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
      message: "User not Exist",
    });
  }
});
