import React, { Component } from "react";
import axios from "axios";
import { InfiniteScroll, Box, Button} from "grommet";
import { Close, SubtractCircle, Edit } from "grommet-icons";
import Feed from "../../Layout/Feed/Feed";
import EmployeeIcons from "../../Layout/EmployeeIcons/EmployeeIcons";
// import Feed from "../Posts/Feed/Feed";
// import FeedTitle from "../Posts/Feed/FeedTitle/FeedTitle";
// import FeedBody from "../Posts/Feed/FeedBody/FeedBody";
import EmployeeForm from "./EmployeeForm/EmployeeForm";
class Employees extends Component {
  state = {
    feed: [],
    step: 5,
    iconColor: "",
    selectedID: "",
    value: "",
    formHeadings: ["name", "position", "email", "phone"],
    employeeForm: {
      name: "",
      position: "",
      email: "",
      phone: ""
    },
    toggleButton: true
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:3001/api/employees")
      .then(res => {
        let { feed } = this.state;

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

  editClickHandler = e => {
    e.preventDefault();
    // console.log(e.target.getAttribute("data"));
    // console.log(this.props.data);
    let { selectedID, toggleButton } = this.state;
    selectedID = e.target.getAttribute("data");
    toggleButton = !toggleButton;
    this.setState({ selectedID: selectedID, toggleButton: toggleButton });
    axios
      .get(`http://localhost:3001/api/employees/${selectedID}`)
      .then(res => {
        // console.log(res);
        let { employeeForm } = this.state;

        employeeForm.name = res.data.employee[0].name;
        employeeForm.position = res.data.employee[0].position;
        employeeForm.email = res.data.employee[0].email;
        employeeForm.phone = res.data.employee[0].phone;

        this.setState({ employeeForm });
      })
      .catch(err => console.log(err));
  };
  deleteClickHandler = e => {
    e.preventDefault();

    let { selectedID, feed } = this.state;
    selectedID = e.target.getAttribute("data");
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

    axios
      .post("http://localhost:3001/api/employees", employeeForm)
      .then(res => {
        // console.log(res.data);
        console.log("added employee!");
        let { feed, employeeForm } = this.state;
        feed.push(res.data);

        employeeForm.name = "";
        employeeForm.position = "";
        employeeForm.email = "";
        employeeForm.phone = "";

        // console.log(employeeForm);

        this.setState({ feed: feed, employeeForm: employeeForm });
      })
      .catch(err => console.log(err));
  };

  updateHandler = e => {
    e.preventDefault();
    let { employeeForm, selectedID } = this.state;

    axios
      .put(`http://localhost:3001/api/employees/${selectedID}`, employeeForm)
      .then(res => {
        // console.log(res.data);
        console.log("updated employee!");
        let { employeeForm, toggleButton } = this.state;
        employeeForm.name = "";
        employeeForm.position = "";
        employeeForm.email = "";
        employeeForm.phone = "";

        toggleButton = !toggleButton;

        this.setState({
          employeeForm: employeeForm,
          toggleButton: toggleButton
        });
        axios
          .get(`http://localhost:3001/api/employees/`)
          .then(res => {
            let { feed } = this.state;

            feed = res.data;
            this.setState({ feed });
          })
          .catch(err => console.log(err));
      });
  };
  cancelUpdateHandler = e => {
    e.preventDefault();
    let { toggleButton, employeeForm } = this.state;

    toggleButton = !toggleButton;
    employeeForm.name = "";
    employeeForm.position = "";
    employeeForm.email = "";
    employeeForm.phone = "";
    this.setState({ toggleButton: toggleButton, employeeForm: employeeForm });
  };

  cancelSubmitHandler = e => {
    e.preventDefault();
    let { employeeForm } = this.state;
    employeeForm.name = "";
    employeeForm.position = "";
    employeeForm.email = "";
    employeeForm.phone = "";
    this.setState({ employeeForm });
  };

  employeeIconsHandler = () => {
    return (
      <React.Fragment>
        <Box direction="row">
          <Button margin="medium" onClick={this.deleteClickHandler}>
            <SubtractCircle />
          </Button>
          <Button margin="medium" onClick={this.editClickHandler}>
            <Edit />
          </Button>
        </Box>
      </React.Fragment>
    );
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
              formHeading={this.state.employeeForm}
              placeholders={this.state.formHeadings}
            >
              {this.state.toggleButton ? (
                <React.Fragment>
                  <Button
                    type="submit"
                    label="Submit"
                    primary
                    onClick={this.submitFormHandler}
                  />
                  <Button
                    plain={false}
                    icon={<Close />}
                    color="neutral-4"
                    primary
                    onClick={this.cancelSubmitHandler}
                  />
                  <Button label="Update" disabled />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Button type="submit" label="Submit" disabled />
                  <Button
                    plain={false}
                    icon={<Close />}
                    color="neutral-4"
                    primary
                    onClick={this.cancelUpdateHandler}
                  />
                  <Button label="Update" primary onClick={this.updateHandler} />
                </React.Fragment>
              )}
            </EmployeeForm>
          </Box>
          <Box direction="column">
            <InfiniteScroll
              items={feed}
              step={step}
              onMore={() => console.log("onMore!!")}
            >
              {(item, index) => (
                <Feed
                  key={`employee${index}`}
                  index={index}
                  item={item}
                  id={`Employee ID: ${item._id}`}
                  title={item.name}
                  body={item.position}
                  email={item.email}
                  icons={
                    <EmployeeIcons
                      editClickHandler={this.editClickHandler}
                      deleteClickHandler={this.deleteClickHandler}
                      data={item._id}
                    />
                  }
                />
              )}
            </InfiniteScroll>
            {/* <InfiniteScroll
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
            </InfiniteScroll> */}
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}

export default Employees;
