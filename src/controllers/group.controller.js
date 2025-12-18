const groupService = require("../services/group.service");

exports.createGroup = async (req, res) => {
  try {
    const group = await groupService.createGroup(req.body);

    res.status(201).json({
      success: true,
      message: "Group created successfully",
      data: group
    });

  } catch (error) {
    console.error("Create Group Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};
