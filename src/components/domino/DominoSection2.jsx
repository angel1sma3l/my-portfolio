import styled from "styled-components";
import AppText from "../AppText";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75vw;
  min-height: 800px;
  padding: 0;
  margin: 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 98%;
  height: 100%;
  padding: 0;
  background-color: black;
  color: white;
  margin: 0;
  box-shadow: 0px 0px 20px gray;
`;

const DominoSection2 = () => {
  return (
    <Section>
      <Div>
        <AppText fs="2rem" lh={1}>
          A little history about Domino Apunte
        </AppText>
        <AppText fw={400} fs="1.3rem">
          I created Domino Apunte due to the nessecity to keep track of my
          points while I was playing with my friend Robert in Massachusetts in
          2018. I look for apps in the app store and found some but, non of them
          suit my needs, too complex and full of ads.
        </AppText>
      </Div>
    </Section>
  );
};

export default DominoSection2;
