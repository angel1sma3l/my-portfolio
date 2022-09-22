import styled from "styled-components";
import AppText from "../AppText";
import Section1 from "./Section1";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 800px;
  max-height: 800px;
  width: 100vw;
  overflow: hidden;
  color: black;
  background-color: lightgray;
`;

const EyeskySection = () => {
  return (
    <Section>
      <Section1 />
    </Section>
  );
};

export default EyeskySection;
