const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Balance routes working");
});

module.exports = router;
