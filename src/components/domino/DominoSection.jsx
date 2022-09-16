import styled, { keyframes } from "styled-components";
import dominoLogo from "../../assets/domino-icon180.png";
import Button from "../Button";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 900px;
  margin: 30px 0px;
  background-color: white;
  color: black;
  padding: 0px;
`;

const roll = keyframes`
  from {
    transform: translateX(-300px) rotate(-1.5turn);
  }

  to {
    transform: translateX(0px) rotate(0deg);
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
  animation: 1.5s ease-in 0s 1 normal ${roll},
    0.1s ease-out 1.5s 38 alternate ${rotate};
`;

const Text = styled.p`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  padding: 0px 200px;

  @media (max-width: 800px) {
    padding: 0px 20px;
  }
`;

const DominoSection = () => {
  return (
    <Section>
      <Text fs="3rem" fw={600}>
        A simple app, used by all.
      </Text>
      <Rotate>
        <img src={dominoLogo} alt="domino apunte" />
      </Rotate>
      <Text fs="2rem" lh={0} fw={500}>
        Domino Apunte
      </Text>
      <Text>
        Over 500k users over the world are using Domino Apunte to keep track of
        their domino's points.
      </Text>
      <Button
        title="Download"
        bgColor="royalblue"
        onClick={() => window.open("https://dominoapunte.com")}
      />
    </Section>
  );
};

export default DominoSection;
