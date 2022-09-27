import styled from "styled-components";
import AppText from "../AppText";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75vw;
  height: 900px;
  padding: 0;
  margin: 0;
`;

const Darklayer = styled.article`
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

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: #00000055;
    text-align: center;
    p {
      font-size: 1.5rem;
    }

    @media (max-width: 800px) {
      width: 90%;
    }
  }
`;

const DominoSection2 = () => {
  return (
    <Section>
      <Darklayer>
        <article>
          <h1>A little history about Domino Apunte</h1>
          <p>
            Back in 2018 in Leominster Massachusetts I was playing a hand of
            Dominoes with a good friend of mine Robert, when the time to write
            down the score came, I thoght there must be a scoresheet app to keep
            track of the points, I look in the app store and found some but I
            didn't like none of them, too much ads and kind of complex or hard
            to use. I just didn't like them and said, I am going to create my
            own app. That day Domino Apunte was born.
          </p>
        </article>
      </Darklayer>
    </Section>
  );
};

export default DominoSection2;
