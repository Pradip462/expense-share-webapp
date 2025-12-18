const mongoose = require("mongoose");

const uri = process.env.MONGODB_URL;

const connectDB = async () => {
  await mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));
};
  
module.exports = connectDB;
