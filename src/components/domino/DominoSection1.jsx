import dominoLogo from "../../assets/domino-icon180.png";
import Button from "../Button";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75vw;
  height: 800px;
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
  color: white;
  background: radial-gradient(red, black 50%);
  margin: 0;
  box-shadow: 0px 0px 20px gray;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-180deg);
  }
`;

const spin = keyframes`
from {
  transform: rotate(-180deg);
}

to {
  transform: rotate(18turn);
}
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: flex;
  transition: all 1s ease-out;

  &:hover {
    animation: 1.3s ease-in-out 0s 1 normal ${rotate},
      5s ease-out 1.3s 1 normal ${spin};
  }
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

const DominoSection1 = () => {
  return (
    <Section>
      <Div>
        <Text fs="3rem" fw={600}>
          A simple app, used by all.
        </Text>

        <Rotate>
          <img src={dominoLogo} alt="domino apunte" />
        </Rotate>

        <Text fs="2rem" fw={500}>
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
