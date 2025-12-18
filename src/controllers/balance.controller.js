const balanceService = require("../services/balance.service");

exports.getBalances = async (req, res) => {
  try {
    const balances = await balanceService.getBalances(req.params.userId);

    res.json({
      success: true,
      data: balances
    });

  } catch (error) {
    console.error("Get Balances Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.settleDue = async (req, res) => {
  try {
    await balanceService.settleDue(req.body);

    res.json({
      success: true,
      message: "Dues settled successfully"
    });

  } catch (error) {
    console.error("Settlement Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};
