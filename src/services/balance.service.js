const Balance = require("../models/balance.model");

exports.getBalances = async (userId) => {
  if (!userId) throw new Error("User ID required");

  const youOwe = await Balance.find({ from: userId });
  const theyOweYou = await Balance.find({ to: userId });

  return { youOwe, theyOweYou };
};

exports.updateBalance = async (from, to, amount) => {
  const reverse = await Balance.findOne({ from: to, to: from });

  if (reverse) {
    if (reverse.amount > amount) {
      reverse.amount -= amount;
      await reverse.save();
    } else if (reverse.amount < amount) {
      const newAmt = amount - reverse.amount;
      await reverse.deleteOne();
      await Balance.create({ from, to, amount: newAmt });
    } else {
      await reverse.deleteOne();
    }
  } else {
    const existing = await Balance.findOne({ from, to });
    if (existing) {
      existing.amount += amount;
      await existing.save();
    } else {
      await Balance.create({ from, to, amount });
    }
  }
};

exports.settleDue = async ({ from, to, amount }) => {
  if (!from || !to || !amount) {
    throw new Error("Settlement details required");
  }

  await exports.updateBalance(to, from, amount);
};
