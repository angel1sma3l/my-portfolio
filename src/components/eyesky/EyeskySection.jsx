import { forwardRef } from "react";
import styled from "styled-components";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Article = styled.article`
  display: flex;
  padding: 0;
  margin: 0;
  width: 100vw;

  figure {
    display: flex;
    align-items: center;
    gap: 2%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
`;

const EyeskySection = forwardRef((props, ref) => {
  return (
    <Article id="eyesky_platform" ref={ref}>
      <figure>
        <Section1 />
        <Section2 />
        <Section3 />
      </figure>
    </Article>
  );
});

export default EyeskySection;
