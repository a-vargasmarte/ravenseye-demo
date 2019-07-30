import React from "react";
import { Heading, Text } from "grommet";

const FeedTitle = props => {
  //   console.log(window.location.href);
  let { item } = props;
  let employeeTitleLabel = "Employee ID: ",
    postTitleLabel = "Post by: ";

  let title = (
    <React.Fragment>
      <Heading level={4} textAlign="end" margin="none" truncate={true}>
        {window.location.href === "http://localhost:3000/employees" ? (
          <Text>
            {employeeTitleLabel} {item._id}
          </Text>
        ) : (
          <Text>
            {postTitleLabel} {item.id}
          </Text>
        )}
      </Heading>
    </React.Fragment>
  );

  return title;
};

export default FeedTitle;
