require("dotenv").config({ quiet: true });
const app = require("./app");
const connectDB = require("./config/db");

const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

app.get('/',(req,res) => {
  console.log("ALL OK SERVER IS WORKING");
  res.send("Hello I am Pradip");
})

startServer();