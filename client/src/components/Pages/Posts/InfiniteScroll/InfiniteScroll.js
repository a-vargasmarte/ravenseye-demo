import React, { Component } from "react";
import { InfiniteScroll, Box, Heading, Text } from "grommet";
import { Chat } from "grommet-icons";
import Feed from "../Feed/Feed";
import axios from "axios";

class Scroll extends Component {
  state = {
    feed: [],
    step: 5
  };
  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        let { feed } = this.state;
        feed = res.data.map(post => {
          return post;
        });

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
          onMore={() => console.log("!!! onMore")}
        >
          {(item, index) => (
            <Feed
              key={`post${index}`}
              index={index}
              item={item}
              title={item.title}
              body={item.body}
            />
          )}
        </InfiniteScroll>
      </React.Fragment>
    );
  }
}

export default Scroll;
