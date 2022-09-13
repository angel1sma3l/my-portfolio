import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99vw;
`;

const Container = ({ children, ...otherProps }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Container;
