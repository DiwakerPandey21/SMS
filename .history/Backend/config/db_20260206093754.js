const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("🔄 Attempting to connect to MongoDB...");
    if (process.env.MONGO_URI) {
      console.log("Connection string (masked):", process.env.MONGO_URI.replace(/:[^@]*@/, ":****@"));
    }
    
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 15000
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    if (error.reason) {
      console.error("Reason:", error.reason.type);
      console.error("Servers:", error.reason.servers);
    }
    process.exit(1);
  }
};

module.exports = connectDB;