import React from "react";

import { Box, TextInput } from "grommet";

const EmployeeForm = props => {
  let { onChangeHandler, children, placeholders, formHeading } = props;

  return (
    <Box direction="column">
      <Box direction="column">
        {placeholders.map((placeholder, i) => {
          return (
            <Box
              direction="row"
              margin="xsmall"
              key={`input-${placeholder}-${i}`}
            >
              <TextInput
                value={formHeading[placeholder]}
                onChange={onChangeHandler}
                placeholder={placeholder}
                key={placeholder}
                formHeading={formHeading}
              />
            </Box>
          );
        })}

        <Box direction="row" justify="between">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeForm;
