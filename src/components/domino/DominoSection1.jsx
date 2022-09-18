import dominoLogo from "../../assets/domino-icon180.png";
import Button from "../Button";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75vw;
  min-height: 800px;
  margin: 0;
  padding: 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 98%;
  height: 100%;
  padding: 0;
  color: black;
  background-color: white;
  margin: 0;
  box-shadow: 0px 0px 20px gray;
`;

const slide = keyframes`
  from {
    transform: scale(0) translateX(-75vw);
  }
  
  25% {
      transform: scale(1) translateX(0px);
    }
    75% {
        transform: scale(1) translateX(0px);
    }
    100% {
      transform: scale(0) translateX(75vw);
    }
`;

const rotate = keyframes`
  from {
    transform: rotate(10deg);
  }

  to {
    transform: rotate(-10deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: flex;
  animation: 333ms ease-in-out 0s 50.5 alternate ${rotate};
`;

const Text = styled.p`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  text-align: center;
  padding: 0;
  width: 50%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const SlideInOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 8s ease-in-out 0s 20.5 normal ${slide};
  overflow: hidden;
  width: 100%;
`;

const DominoSection1 = () => {
  return (
    <Section>
      <Div>
        <SlideInOut>
          <Text fs="3rem" fw={600}>
            A simple app, used by all.
          </Text>
        </SlideInOut>
        <Rotate>
          <img src={dominoLogo} alt="domino apunte" />
        </Rotate>
        <Text fs="2rem" lh={0} fw={500}>
          Domino Apunte
        </Text>
        <Text>
          Over 500k users over the world are using Domino Apunte to keep track
          of their domino's points.
        </Text>
        <Button
          title="Download"
          bgColor="royalblue"
          onClick={() => window.open("https://dominoapunte.com")}
        />
      </Div>
    </Section>
  );
};

export default DominoSection1;
