const User = require("../models/user.model");


exports.createUser = async ({ name }) => {
  if (!name) {
    throw new Error("User name is required");
  }

  const user = await User.create({ name });
  return user;
};
