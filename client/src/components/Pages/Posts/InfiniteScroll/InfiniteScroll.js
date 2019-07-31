import React, { Component } from "react";
import { InfiniteScroll } from "grommet";
import Feed from "../Feed/Feed";
import axios from "axios";
import FeedTitle from "../Feed/FeedTitle/FeedTitle";

class Scroll extends Component {
  state = {
    feed: [],
    step: 5
  };
  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res.data);
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
              // FeedTitle={<FeedTitle />}
            />
          )}
        </InfiniteScroll>
      </React.Fragment>
    );
  }
}

export default Scroll;
