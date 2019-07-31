const express = require("express");
const router = express.Router();
const employeeController = require("../../controllers/Employee");

// routes
router
  .route("/")
  .get(employeeController.getAllEmployees)
  .post(employeeController.addAEmployee);

router
  .route("/:id")
  .get(employeeController.getAEmployee)
  .put(employeeController.updateEmployee)
  .delete(employeeController.deleteAEmployee);

module.exports = router;
