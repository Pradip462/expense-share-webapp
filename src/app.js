const express = require("express");

const userRoutes = require("./routes/user.routes");
const groupRoutes = require("./routes/group.routes");
const expenseRoutes = require("./routes/expense.routes");
const balanceRoutes = require("./routes/balance.routes");

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/groups", groupRoutes);
app.use("/expenses", expenseRoutes);
app.use("/balances", balanceRoutes);

module.exports = app;
