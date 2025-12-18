const expenseService = require("../services/expense.service");

exports.addExpense = async (req, res) => {
  try {
    await expenseService.addExpense(req.body);

    res.status(201).json({
      success: true,
      message: "Expense added successfully"
    });

  } catch (error) {
    console.error("Add Expense Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};
