import React from "react";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import Header from "./Header/Header";
import Body from "./Body/Body";
const Layout = (props) => {
  return (
    <Grommet full theme={grommet}>
      <Header />
      <Body>{props.children}</Body>
    </Grommet>
  );
};

export default Layout;
