import React from "react";
import { Heading } from "grommet";

const FeedTitle = props => {
//   console.log(window.location.href);
  let { item } = props;
  let title =
    window.location.href === "http://localhost:3000/employees" ? (
      <React.Fragment>
        <Heading level={4} textAlign="end" margin="none">
          Employee ID: {item.id}
        </Heading>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Heading level={4} textAlign="end" margin="none">
          Post by: {item.id}
        </Heading>
      </React.Fragment>
    );
  return title;
};

export default FeedTitle;
