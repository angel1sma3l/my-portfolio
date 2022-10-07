import React, { forwardRef } from "react";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
  align-items: center;
  padding: 60px 0 0 0;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;

const Container = forwardRef(({ children, ...otherProps }, ref) => {
  return (
    <Article ref={ref} {...otherProps}>
      {children}
    </Article>
  );
});

export default Container;
