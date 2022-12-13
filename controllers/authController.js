const asyncHandler = require("express-async-handler");
const User = require("../models/users.schema");

exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Cheking the required data is send or not
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please fill all the Details",
    });
  }
  // Checking Email is already registered or not
  const emailExist = await User.findOne({ email });
  if (emailExist) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }

  // Save the details
  const user = await User.create({
    name,
    email,
    password,
  });

  user.password = undefined;
  const token = await await user.getJWTToken();
  return res.status(200).json({
    success: true,
    message: "Account is Created Successfully",
    data: { user, token },
  });
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please fill all the Details",
    });
  }
  // Checking Email is registered or not
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Email is not registered with us",
    });
  }

  if (user && (await user.comparePassword(password))) {
    user.password = undefined;
    const token = await await user.getJWTToken();
    return res.status(200).json({
      success: true,
      message: "Login Successfully",
      data: { user, token },
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid Credentials!",
  });
});

exports.authVerifyUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Token Verified Successfully",
  });
});
