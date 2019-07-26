import React, { Component } from "react";
import Scroll from "./InfiniteScroll/InfiniteScroll";
import Feed from "./Feed/Feed";
import axios from "axios";

class Posts extends Component {
  state = {
    feed: [],
    step: 5
  };
  
  render() {
    let { feed, step } = this.state;
    console.log(feed);
    return (
      <React.Fragment>
        <Scroll />
      </React.Fragment>
    );
  }
}

export default Posts;
