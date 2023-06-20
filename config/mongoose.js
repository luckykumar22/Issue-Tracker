const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin22:tabtab123@cluster0.9mlsgec.mongodb.net/issue_tracker?retryWrites=true&w=majority"
);
const db = mongoose.connection;

//If any Error then Getting this Line
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", () => {
  console.log("Connected to Database :: MongoDB ");
});

//Exports db
module.exports = db;
