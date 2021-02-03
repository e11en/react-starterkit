import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  flex-grow: 1;
`;

const StyledTitle = styled(Typography)`
  flex-grow: 1;
`;

export default (props) => (
    <StyledAppBar position="fixed">
      <Toolbar>
        <StyledTitle variant="h6">{props.title}</StyledTitle>
      </Toolbar>
    </StyledAppBar>
  );
