const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database!");
  } catch (e) {
    console.error("Error connecting to database: ", e);
  }
}

module.exports = connectToDb;
