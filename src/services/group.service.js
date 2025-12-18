const Group = require("../models/group.model");

exports.createGroup = async ({ name, members }) => {
  if (!name || !members || members.length === 0) {
    throw new Error("Group name and members are required");
  }

  return await Group.create({ name, members });
};
