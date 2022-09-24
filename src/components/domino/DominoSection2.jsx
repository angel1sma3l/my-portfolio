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

const Darklayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://dmicano.s3.us-east-2.amazonaws.com/Splash.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: black;
  color: white;
  box-shadow: 0px 0px 20px lightgray;
  width: 98%;
  height: 100%;
  margin: 0;
  padding: 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: #00000055;
  }
`;

const DominoSection2 = () => {
  return (
    <Section>
      <Darklayer>
        <div>
          <AppText width="50%" fw={400} fs="1.5rem">
            <AppText fs="2.3rem">A little history about Domino Apunte</AppText>
            <br />
            Back in 2018 in Leominster Massachusetts I was playing a hand of
            Dominoes with a good friend of mine Robert, when the time to write
            down the score came, I thoght there must be a scoresheet app to keep
            track of the points, I look in the app store and found some but I
            didn't like none of them, too much ads and kind of complex or hard
            to use. I just didn't like them and said, I am going to create my
            own app. That day Domino Apunte was born.
          </AppText>
        </div>
      </Darklayer>
    </Section>
  );
};

export default DominoSection2;
