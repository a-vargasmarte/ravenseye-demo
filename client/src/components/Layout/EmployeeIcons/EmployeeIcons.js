import React from "react";
import { Box, Button } from "grommet";
import { SubtractCircle, Edit } from "grommet-icons";

const EmployeeIcons = props => {
  let { deleteClickHandler, editClickHandler, data } = props;
  return (
    <React.Fragment>
      <Box direction="row">
        <Button margin="medium" onClick={deleteClickHandler}>
          <SubtractCircle data={data} />
        </Button>
        <Button margin="medium" onClick={editClickHandler}>
          <Edit data={data} />
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default EmployeeIcons;
