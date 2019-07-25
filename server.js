// require express and mongoose apps
const express = require("express");
const mongoose = require("mongoose");

// middleware
const bodyParser = require("body-parser");

// routes
const employeeRoutes = require("./routes/api/Employees");

// create an express instance and plug in middleware
const app = express().use(bodyParser.json());

// provide header access to prevent Cors problems
app.use(function(req, res, next) {
  let field = "Access-Control-Allow-Origin",
    originURL = "http://localhost:3000",
    headerAccess = "Access-Control-Allow-Headers",
    accessPermission = "Origin, X-Requested-With, Content-Type, Accept";
  res.header(field, originURL);
  res.header(headerAccess, accessPermission);
  next();
});

// configure database
const db = require("./config/keys").mongoURI;

// connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected... "))
  .catch(err => console.log(err));

// use routes
app.use("/api/employees", employeeRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));
