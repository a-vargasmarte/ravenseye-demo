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
      <Button href="/">
        <Text size="large">Raven's Eye</Text>
      </Button>
      {window.location.href === "http://localhost:3000/employees" ? (
        <Button href="/">
          <Text size="large">Social Network Feed</Text>
        </Button>
      ) : (
        <Button href="/employees">
          <Text size="large">Employee Database</Text>
        </Button>
      )}

      <Text>Alberto Vargas</Text>
    </Box>
  );
};

export default Header;
