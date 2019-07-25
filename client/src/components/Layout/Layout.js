import React from "react";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <Grommet full theme={grommet}>
      <Header />
      {children}
    </Grommet>
  );
};

export default Layout;
