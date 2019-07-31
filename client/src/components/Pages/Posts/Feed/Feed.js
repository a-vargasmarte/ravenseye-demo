import React from "react";
import { Box, Text, Heading } from "grommet";

const Feed = props => {
  let {
    index,
    title,
    body,
    FeedTitle,
    FeedBody
  } = props;

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
        <Box align="center">{FeedBody}</Box>
      </Box>
    </React.Fragment>
  );
};

export default Feed;
