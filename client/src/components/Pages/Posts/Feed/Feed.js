import React from "react";
import { Box, Text, Heading, Button } from "grommet";
import { Chat, AddCircle, SubtractCircle, Edit } from "grommet-icons";
// import { FeedBody } from "./FeedBody/FeedBody";
const Feed = props => {
  let {
    index,
    item,
    title,
    body,
    commentSize,
    email,
    FeedTitle,
    FeedBody
  } = props;
  console.log(window.location.href);

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
        {FeedTitle}
        <Heading level={3} textAlign="center" truncate={true}>
          {title}
        </Heading>

        <Text margin="medium" size="small" weight="bold" color="white">
          {body}
        </Text>
        <Box align="center">
          {FeedBody}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Feed;
