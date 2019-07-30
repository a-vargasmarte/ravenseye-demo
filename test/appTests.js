const assert = require("chai").assert;
const Employee = require("../models/Employee");

let employee;

describe("App", () => {
  it("creates an employee", function(done) {
    this.timeout(2500);
    setTimeout(done, 2000);
    employee = new Employee({
      name: "Tito",
      position: "Electrician",
      email: "ti@to.com",
      phone: "302747230"
    });
    employee
      .save()
      .then(() => {
        assert(!employee.isNew);
        done();
      })
      .catch(err => console.log(err));
  });

  it(`finds an employee with the name 'Tito'`, function(done) {
    this.timeout(2500);
    setTimeout(done, 2000);
    Employee.findOne({ name: "Tito" }).then(employee => {
      assert(employee.name === "Tito");
      done();
    });
  });
});
