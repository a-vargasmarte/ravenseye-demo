import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Posts from "./components/Pages/Posts/Posts";
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      <div className="App">
        <Layout>
          <Posts />
        </Layout>
      </div>
      // </BrowserRouter>
    );
  }
}

export default App;
