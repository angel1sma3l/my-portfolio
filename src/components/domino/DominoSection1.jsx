import dominoLogo from "../../assets/domino-icon180.png";
import Button from "../Button";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75vw;
  height: 900px;
  margin: 0;
  padding: 0;

article {
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
  text-align: center;

  h1 {
    font-weight: 500;
    font-size: 3rem;
  }

  a {
    color: white;
    cursor:not-allowed;
    padding: 20px;
  }

  h3 {
    font-weight: 400;
  }

  h1,
  h3 {
    width: 50%;
    @media (max-width: 800px) {
      width: 95%;
    }
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(15deg);
  }
  5% {
    transform: rotate(15deg);
  }

  40% {
    transform: rotate(-170deg);
  }
43% {
  transform: rotate(-170deg);
}

100% {
  transform: rotate(10.05turn);
}
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: flex;
  animation: 5s ease-in-out 3s 8 normal ${rotate};
`;

const DominoSection1 = () => {
  return (
    <Section>
      <article>
        <h1> A simple app, used by all.</h1>

        <Rotate>
          <img src={dominoLogo} alt="domino apunte logo" />
        </Rotate>

        <h2>Domino Apunte</h2>
        <h3>
          Over 500k users over the world are using Domino Apunte to keep track
          of their domino's points.
        </h3>
        <Button
          title="Download"
          bgColor="royalblue"
          onClick={() => window.open("https://dominoapunte.com")}
        />
        <a title="codes source are private" href="#">
          GitHub source code
        </a>
      </article>
    </Section>
  );
};

export default DominoSection1;
