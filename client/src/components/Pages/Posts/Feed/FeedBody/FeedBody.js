import React from "react";
import { Box, Text, Button } from "grommet";
import { SubtractCircle, Edit, Chat } from "grommet-icons";

const FeedBody = props => {
  let { email, commentSize } = props;
  let body =
    window.location.href === "http://localhost:3000/employees" ? (
      <React.Fragment>
        <Text margin="medium" size="small" weight="bold" color="white">
          {email}
        </Text>

        <Box direction="row">
          <Button margin="medium">
            <SubtractCircle />
          </Button>
          <Button margin="medium">
            <Edit />
          </Button>
        </Box>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Chat color="white" size="large" />
        <Text>{commentSize}</Text>
      </React.Fragment>
    );
  return body;
};

export default FeedBody;
