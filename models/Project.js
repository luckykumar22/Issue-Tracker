const mongoose = require("mongoose"); // Erase if already required

// The Schema of the Project model
var projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
    unique: true,
  },
  issues: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Issue",
    },
  ],
  labels: [
    {
      type: String,
    },
  ],
});

//Export the model
module.exports = mongoose.model("Project", projectSchema);
