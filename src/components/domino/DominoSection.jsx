import { useState } from "react";
import styled from "styled-components";
import DominoSection1 from "./DominoSection1";
import DominoSection2 from "./DominoSection2";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import { keyframes } from "styled-components";

const sliding1 = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-100vw);
  }

  100% {
    transform: translateX(-200vw);
  }
`;

const Carrousel = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  transition: ${({ sectionNumber, transitionOff }) =>
    transitionOff ? "none" : "all 0.8s ease-in-out"};

  /* animation: 28s ease-in 5s infinite forwards ${sliding1}; */

  transform: ${({ sectionNumber }) => "translateX(-" + sectionNumber + "vw)"};
`;

const Left = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 0px;
  font-size: 80px;
  color: gray;
  cursor: pointer;
  z-index: 2;
`;
const Right = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 0px;
  font-size: 80px;
  color: gray;
  cursor: pointer;
  z-index: 2;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  min-width: 75vw;
  max-width: 75vw;
  min-height: 800px;
  max-height: 800px;
  background-color: white;
  position: relative;
  overflow: visible;
  padding: 0;
  margin: 0px 0.8vw;
`;

const Glass = styled.div`
  display: flex;
  background-color: #ffffff99;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Contain = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  min-width: 100vw;
  min-height: 800px;
  align-items: center;
  justify-content: center;
  background-color: white;
  overflow: hidden;
`;

const DominoSection = () => {
  const [sectionNumber, setSectionNumber] = useState(0);
  const [transitionOff, setTransitionOff] = useState(false);

  const handleRight = () => {
    let state = sectionNumber;
    // turnoff transition to go back to the first section or slide.
    setTransitionOff(state > 75 ? true : false);

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
        <Left onClick={handleLeft}>
          <ChevronLeft fontSize="inherit" color="inherit" />
        </Left>

        <Carrousel sectionNumber={sectionNumber} transitionOff={transitionOff}>
          <DominoSection2 />
          <DominoSection1 />
          <DominoSection2 />
        </Carrousel>

        <Right onClick={handleRight}>
          <ChevronRight fontSize="inherit" color="inherit" />
        </Right>
      </Main>
      <Glass></Glass>
    </Contain>
  );
};

export default DominoSection;
