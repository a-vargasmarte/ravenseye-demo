import React, { Component } from "react";
import axios from "axios";
import { InfiniteScroll } from "grommet";
import Feed from "../Posts/Feed/Feed";
import FeedTitle from "../Posts/Feed/FeedTitle/FeedTitle";
import FeedBody from "../Posts/Feed/FeedBody/FeedBody";
class Employees extends Component {
  state = {
    feed: [],
    step: 5,
    iconColor: ""
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:3001/api/employees")
      .then(res => {
        let { feed, step } = this.state;
        console.log(res.data[0]);

        feed = [res.data[0]["0"], res.data[0]["1"], res.data[0]["2"]];
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
  render() {
    let { feed, step } = this.state;
    return (
      <React.Fragment>
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
              body={item.phone}
              FeedTitle={<FeedTitle item={item} />}
              FeedBody={<FeedBody email={item.email} />}
            />
          )}
        </InfiniteScroll>
      </React.Fragment>
    );
  }
}

export default Employees;
