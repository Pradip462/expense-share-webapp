const userService = require("../services/user.service");


exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user
    });

  } catch (error) {
    console.error("Create User Error:", error.message);

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
