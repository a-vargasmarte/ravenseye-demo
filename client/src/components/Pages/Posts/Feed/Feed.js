import React from "react";
import { Box, Text, Heading } from "grommet";
import { Chat } from "grommet-icons";

const Feed = (props) => {
  let {index, item} = props;
  return (
    <React.Fragment>
      <Box
        height="medium"
        width="medium"
        key={index}
        border={{ color: "dark-1", size: "large" }}
        pad="small"
        margin="small"
        round={true}
        background={`neutral-${(index % 4) + 1}`}
        animation={{ type: "slideRight", duration: 200 }}
      >
        <Heading level={4} textAlign="end" margin="none">
          Post by: {item.id}
        </Heading>
        <Heading level={3} textAlign="center" truncate={true}>
          {item.title}
        </Heading>

        <Text margin="medium" size="small" weight="bold" color="white">
          {item.body}
        </Text>
        <Box align="center">
          <Chat color="white" size="large" />
          <Text>{item.commentSize}</Text>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Feed;
