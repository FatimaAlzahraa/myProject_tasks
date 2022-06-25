const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    
  },
  isComplete:{
      type:Boolean,
      default:false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  
});

//create model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;