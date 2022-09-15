import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding-top: 60px;
  width: 100vw;
  overflow: scroll;
  scroll-behavior: smooth;
`;

const Container = forwardRef(({ children, ...otherProps }, ref) => {
  return (
    <StyledDiv ref={ref} {...otherProps}>
      {children}
    </StyledDiv>
  );
});

export default Container;
