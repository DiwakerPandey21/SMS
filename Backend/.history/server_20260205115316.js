const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

const start = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

start();