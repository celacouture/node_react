const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alertSchema= new Schema({
  title:{type:String, required: true},
  description:{type:String, required:true},
  img: { data: Buffer, contentType: String }
})

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;
