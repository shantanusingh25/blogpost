// db.js
require("dotenv").config();
const mongoose = require("mongoose");
require("colors");

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ The database connected successfully.".green.bold);
    } catch (e) {
        console.error("❌ An error occurred while connecting to DB:".red.bold, e.message.red);
        process.exit(1);
    }
}

module.exports = connectToDatabase;