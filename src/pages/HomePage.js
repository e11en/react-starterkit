import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export default () => {
  return (
    <StyledWrapper>
      Hallo 123
    </StyledWrapper>
  );
}