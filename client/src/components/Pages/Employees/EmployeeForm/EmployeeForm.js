import React from "react";

import { Box, Button, Form, FormField, TextInput } from "grommet";

const EmployeeForm = props => {
  let { submitFormHandler, value, onChangeHandler } = props;
  let placeholders = ["name", "position", "email", "phone"];

  return (
    <Box direction="row" width="medium">
      {placeholders.map(placeholder => {
        return (
          <TextInput
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            key={placeholder}
          />
        );
      })}

      <Box direction="row" justify="between">
        <Button
          type="submit"
          label="Submit"
          primary
          onClick={submitFormHandler}
        />
      </Box>
    </Box>
  );
};

export default EmployeeForm;
