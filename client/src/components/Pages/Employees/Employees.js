import React, { Component } from "react";
import axios from "axios";
import { InfiniteScroll } from "grommet";
import Feed from "../Posts/Feed/Feed";
class Employees extends Component {
  state = {
    feed: [],
    step: 5
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
            />
          )}
        </InfiniteScroll>
      </React.Fragment>
    );
  }
}

export default Employees;
