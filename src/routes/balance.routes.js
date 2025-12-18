const express = require("express");
const router = express.Router();
const balanceController = require("../controllers/balance.controller");

router.get("/:userId", balanceController.getBalances);
router.post("/settle", balanceController.settleDue);

module.exports = router;
