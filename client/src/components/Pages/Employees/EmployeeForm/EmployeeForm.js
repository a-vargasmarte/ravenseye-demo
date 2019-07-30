import React from "react";

import { Box, Button, Form, FormField, TextInput } from "grommet";

const EmployeeForm = props => {
  let {
    submitFormHandler,
    value,
    onChangeHandler,
    children,
    placeholders,
    formHeading
  } = props;

  return (
    <Box direction="column">
      <Box direction="column">
        {placeholders.map(placeholder => {
          return (
            <Box direction="row" margin="xsmall">
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
