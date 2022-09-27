import { useState } from "react";
import styled from "styled-components";
import DominoSection1 from "./DominoSection1";
import DominoSection2 from "./DominoSection2";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import { keyframes } from "styled-components";
import DominoSection3 from "./DominoSection3";

const Carrousel = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  transform: ${({ sectionNumber }) => "translateX(-" + sectionNumber + "vw)"};
  transition: transform 1s ease-in-out;
`;

const Left = styled.div`
  position: absolute;
  display: ${({ sectionNumber }) => (sectionNumber < 1 ? "none" : "flex")};
  align-items: center;
  left: 0px;
  font-size: 80px;
  color: gray;
  cursor: pointer;
  z-index: 2;
`;
const Right = styled.div`
  position: absolute;
  display: ${({ sectionNumber }) => (sectionNumber > 75 ? "none" : "flex")};
  align-items: center;
  right: 0px;
  font-size: 80px;
  color: gray;
  cursor: pointer;
  z-index: 2;
`;

const Main = styled.article`
  display: flex;
  align-items: center;
  min-width: 75vw;
  max-width: 75vw;
  height: 900px;
  background-color: white;
  position: relative;
  overflow: visible;
  padding: 0;
  margin: 0;
`;

const Glass = styled.aside`
  display: flex;
  background-color: lightgray;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Contain = styled.article`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height: 950px;
  align-items: center;
  justify-content: center;
  background-color: white;
  overflow: hidden;
`;

const DominoSection = () => {
  const [sectionNumber, setSectionNumber] = useState(0);

  const handleRight = () => {
    let state = sectionNumber;

    state = state < 2 * 75 ? state + 75 : 0;
    setSectionNumber(state);
  };
  const handleLeft = () => {
    let state = sectionNumber;
    state = state < 75 ? state : state - 75;
    setSectionNumber(state);
  };

  return (
    <Contain>
      <Glass></Glass>
      <Main>
        <Left onClick={handleLeft} sectionNumber={sectionNumber}>
          <ChevronLeft fontSize="inherit" color="inherit" />
        </Left>

        <Carrousel sectionNumber={sectionNumber}>
          <DominoSection1 />
          <DominoSection2 />
          <DominoSection3 />
        </Carrousel>

        <Right onClick={handleRight} sectionNumber={sectionNumber}>
          <ChevronRight fontSize="inherit" color="inherit" />
        </Right>
      </Main>
      <Glass></Glass>
    </Contain>
  );
};

export default DominoSection;
