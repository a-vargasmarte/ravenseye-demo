// require dependencies
const mongoose = require("mongoose");

// create schema
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: String,
  position: String,
  email: String,
  phone: String
});

module.exports = Employee = mongoose.model("employee", EmployeeSchema);
