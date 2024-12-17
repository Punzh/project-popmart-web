const mongoose = require("mongoose");


const threadSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true, // Name is required
    },
    description: {
      type: String,
      required: true, // Description is required
    },
  });
  
  // Create the model
  const Thread = mongoose.model("Thread", threadSchema, "threads");
  module.exports = Thread;