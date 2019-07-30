import React, { Component } from "react";
import axios from "axios";
import { InfiniteScroll, Box } from "grommet";
import Feed from "../Posts/Feed/Feed";
import FeedTitle from "../Posts/Feed/FeedTitle/FeedTitle";
import FeedBody from "../Posts/Feed/FeedBody/FeedBody";
import EmployeeForm from "./EmployeeForm/EmployeeForm";
class Employees extends Component {
  state = {
    feed: [],
    step: 5,
    iconColor: "",
    selectedID: "",
    value: "",
    employeeForm: {
      name: "",
      position: "",
      email: "",
      phone: ""
    }
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:3001/api/employees")
      .then(res => {
        let { feed, step, selectedID } = this.state;
        console.log(selectedID);

        feed = res.data;
        this.setState({ feed });
      })
      .catch(err => console.log(err));
  };

  onHover = e => {
    e.preventDefault();
    let { iconColor } = this.state;
    iconColor = "black";
    this.setState({ iconColor });
  };

  onChangeHandler = e => {
    // console.log(e.target.placeholder);
    let { employeeForm } = this.state;
    // console.log(employeeForm);

    switch (e.target.placeholder) {
      case "name":
        employeeForm["name"] = e.target.value;
        this.setState({ employeeForm });
        break;
      case "position":
        employeeForm["position"] = e.target.value;
        this.setState({ employeeForm });
        break;
      case "email":
        employeeForm["email"] = e.target.value;
        this.setState({ employeeForm });
        break;
      case "phone":
        employeeForm["phone"] = e.target.value;
        this.setState({ employeeForm });
        break;
      default:
        console.log("whop");
    }
  };

  valueHandler = (e) => {
    console.log(this);
  }

  editClickHandler = e => {
    e.preventDefault();
    let { selectedID, feed } = this.state;
    selectedID = e.currentTarget.getAttribute("data");
    this.setState({ selectedID });
    axios
      .get(`http://localhost:3001/api/employees/${selectedID}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  deleteClickHandler = e => {
    e.preventDefault();

    let { selectedID, feed } = this.state;
    selectedID = e.currentTarget.getAttribute("data");
    this.setState({ selectedID });
    axios
      .delete(`http://localhost:3001/api/employees/${selectedID}`)
      .then(res => {
        console.log(res);
      })
      .then(() => {
        axios
          .get(`http://localhost:3001/api/employees/`)
          .then(res => {
            feed = res.data;
            this.setState({ feed });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  submitFormHandler = e => {
    e.preventDefault();
    let { employeeForm } = this.state;
    console.log(employeeForm);
    // let { value } = e;
    // console.log(value);
    axios
      .post("http://localhost:3001/api/employees", employeeForm)
      .then(res => {
        console.log(res.data);
        console.log("added employee!");
        let { feed, employeeForm } = this.state;
        feed.push(res.data);

        employeeForm.name = "";
        employeeForm.position = "";
        employeeForm.email = "";
        employeeForm.phone = "";

        console.log(employeeForm);

        this.setState({ feed: feed, employeeForm: employeeForm });
        // console.log(this.state.employeeForm);
      })
      .catch(err => console.log(err));
  };
  render() {
    let { feed, step } = this.state;

    return (
      <React.Fragment>
        <Box direction="row" align="start">
          <Box direction="column" margin="large">
            <EmployeeForm
              submitFormHandler={this.submitFormHandler}
              onChangeHandler={this.onChangeHandler}
              value={this.valueHandler()}
            />
          </Box>
          <Box direction="column">
            <InfiniteScroll
              items={feed}
              step={step}
              onMore={() => console.log("!!! on More")}
            >
              {(item, index) => (
                <Feed
                  key={`post${index}`}
                  index={index}
                  item={item}
                  title={item.name}
                  body={item.position}
                  FeedTitle={<FeedTitle item={item} />}
                  FeedBody={
                    <FeedBody
                      email={item.email}
                      editClickHandler={this.editClickHandler}
                      deleteClickHandler={this.deleteClickHandler}
                      data={item._id}
                    />
                  }
                />
              )}
            </InfiniteScroll>
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}

export default Employees;
