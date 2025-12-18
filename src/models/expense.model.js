const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
  paidBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: Number,
  splitType: {
    type: String,
    enum: ["EQUAL", "EXACT", "PERCENT"]
  },
  splits: Object
});

module.exports = mongoose.model("Expense", expenseSchema);