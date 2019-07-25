// require model
const Employee = require("../models/Employee");

module.exports = {
  getAllEmployees: (req, res) => {
    Employee.find()
      .then(employees => res.json(employees))
      .catch(err => console.log(err));
  },
  addAEmployee: (req, res) => {
    const newEmployee = new Employee({
      name: req.body.name,
      position: req.body.position
    });

    newEmployee
      .save()
      .then(employee => res.json(employee))
      .catch(err => console.log(err));
  },
  deleteAEmployee: (req, res) => {
    Employee.findById(req.params.id)
      .then(() => res.json({ success: true }))
      .catch(err => console.log(err));
  },
  updateEmployee: (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(employee => {
        console.log(`updated obs of id ${req.params.id} to ${employee}`);
        // then find employee by id and return with updates
        Employee.findById(req.params.id)
          .then(employee => res.send(employee))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
};
