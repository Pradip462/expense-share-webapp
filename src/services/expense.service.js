const Expense = require("../models/expense.model");
const Group = require("../models/group.model");
const balanceService = require("./balance.service");

exports.addExpense = async ({ groupId, paidBy, amount, splitType, splits }) => {

  if (!groupId || !paidBy || !amount || !splitType) {
    throw new Error("Missing expense fields");
  }

  const group = await Group.findById(groupId);
  if (!group) throw new Error("Group not found");

  if (!group.members.includes(paidBy)) {
    throw new Error("Payer not part of group");
  }

  await Expense.create({ groupId, paidBy, amount, splitType, splits });

  const members = group.members;

  for (const member of members) {
    if (member.toString() === paidBy) continue;

    let share = 0;

    if (splitType === "EQUAL") {
      share = amount / members.length;
    } else if (splitType === "EXACT") {
      share = splits?.[member];
    } else if (splitType === "PERCENT") {
      share = (splits?.[member] / 100) * amount;
    }

    if (!share || share <= 0) {
      throw new Error("Invalid split data");
    }

    await balanceService.updateBalance(member, paidBy, share);
  }
};
