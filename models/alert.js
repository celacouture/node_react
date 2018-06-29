const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlertSchema= new Schema({
  title:{
    type:String,
    required: true
  },
  description:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }
})

const Alert = mongoose.model("alert", AlertSchema);

module.exports = Alert;
