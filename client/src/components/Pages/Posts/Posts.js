import React, { Component } from "react";
import { InfiniteScroll, Text, Box } from "grommet";
import Feed from "../../Layout/Feed/Feed";
import axios from "axios";
import { Chat } from "grommet-icons";

class Posts extends Component {
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

  iconHandler = () => {
    return (
      <React.Fragment>
        <Box direction="row" margin='small'>
          <Chat />
          <Text margin="xsmall">{this.randomNumberHandler()}</Text>
        </Box>
      </React.Fragment>
    );
  };

  randomNumberHandler = () => {
    return Math.floor(Math.random() * 100 + 1);
  };
  render() {
    let { feed, step } = this.state;
    return (
      <React.Fragment>
        <InfiniteScroll
          items={feed}
          step={step}
          onMore={() => console.log("onMore !!!")}
        >
          {(item, index) => (
            <Feed
              key={`post${index}`}
              index={index}
              item={item}
              id={`Post by: ${item.id}`}
              title={item.title}
              body={item.body}
              icons={this.iconHandler()}
            />
          )}
        </InfiniteScroll>
      </React.Fragment>
    );
  }
}

export default Posts;
