import React from "react";
import { Box, Button, Text } from "grommet";

const Header = () => {
  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      pad={{ horizontal: "medium", vertical: "small" }}
      background="dark-2"
    >
      <Button>
        <Text size="large">Raven's Eye</Text>
      </Button>
      <Text>Alberto Vargas</Text>
    </Box>
  );
};

export default Header;
