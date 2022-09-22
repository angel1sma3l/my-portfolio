import styled from "styled-components";
import AppText from "../AppText";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75vw;
  height: 800px;
  padding: 0;
  margin: 0;
`;

const Div = styled.div`
  background: linear-gradient(to right, red, black 70%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 98%;
  height: 100%;
  color: white;
  padding: 0;
  margin: 0;
  box-shadow: 0px 0px 20px gray;
  background-color: black;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const A = styled.a`
  color: white;
`;

const DominoSection3 = () => {
  return (
    <Section>
      <Div>
        <AppText fs="2rem">Created with React Native (Expo)</AppText>
        <Row>
          <AppText width="50%" fw={400} fs="1.5rem">
            Created for dominoes players to keep track of their score. Simple
            and very easy to use, just tapping the plus (+) button under your
            team's name. A pront pops up to allow to enter the points and then
            it calculate your total. Thats all your need. Currently available in
            Apple and Google Play Store{" "}
            <A href="https://dominoapunte.com">download</A> for FREE!
          </AppText>
          <video height="400px" controls muted autoPlay loop>
            <source src="https://dmicano.s3.us-east-2.amazonaws.com/domino-demo.mp4" />
            <p>
              This video format is not supported by this browser. below is the
              link
            </p>
            <a href="https://dmicano.s3.us-east-2.amazonaws.com/domino-demo.mp4">
              Domino Apunte demo
            </a>
          </video>
        </Row>
      </Div>
    </Section>
  );
};

export default DominoSection3;
