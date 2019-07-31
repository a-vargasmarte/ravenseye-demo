import React from "react";
import { Box, Text, Heading } from "grommet";

const Feed = props => {
  let { index, id, title, body, icons, email } = props;
  return (
    <React.Fragment>
      <Box
        height="medium"
        width="medium"
        key={index}
        border={{ color: "dark-1", size: "large" }}
        pad="small"
        round={true}
        background={`neutral-${(index % 4) + 1}`}
        animation={{ type: "slideRight", duration: 200 }}
        margin="small"
      >
        <Heading level={4} textAlign="end" truncate={true} margin="small">
          <Text>{id}</Text>
        </Heading>
        <Heading level={3} textAlign="center" truncate={true} margin="small">
          {title}
        </Heading>
        <Text textAlign="start" size="small" weight="bold" color="white">
          {body}
        </Text>
        <Text textAlign="start" size="small" weight="bold" color="white">
          {email}
        </Text>
        <Box align="center">{icons}</Box>
      </Box>
    </React.Fragment>
  );
};

export default Feed;
