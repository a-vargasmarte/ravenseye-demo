import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Posts from "./components/Pages/Posts/Posts";
import Employees from "./components/Pages/Employees/Employees";
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Route path="/" exact={true} component={Posts} />
            <Route path="/employees" exact={true} component={Employees} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
