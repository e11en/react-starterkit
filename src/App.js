import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Menu from "./components/Menu/MenuComponent";
import Routing from "./components/RoutingComponent";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ce0058",
    },
    secondary: {
      main: "#244e6b",
    },
  },
});

const StyledWrapper = styled.div`
  margin-top: 64px;
  padding: 1em;
`;

export default() => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Menu title="SomeName" />
        <StyledWrapper>
          <Routing />
        </StyledWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}