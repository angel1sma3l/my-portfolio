import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75vw;
  height: 900px;
  padding: 0;
  margin: 0;

  article {
    background: linear-gradient(to right, red, black 70%);
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    width: 98%;
    height: 100%;
    color: white;
    padding: 0;
    margin: 0;
    text-align: center;
    box-shadow: 0px 0px 20px gray;
    h1 {
      margin: 20px auto;
    }
    p {
      width: 50%;
      @media (max-width: 800px) {
        width: 95%;
      }
    }

    a {
      color: white;
    }
  }
`;

const DominoSection3 = () => {
  return (
    <Section>
      <article>
        <h1>Created with React Native (Expo)</h1>

        <video height="400" controls muted autoPlay loop>
          <source src="https://dmicano.s3.us-east-2.amazonaws.com/domino-demo.mp4" />
          <p>
            This video format is not supported by this browser. below is the
            link
            <a href="https://dmicano.s3.us-east-2.amazonaws.com/domino-demo.mp4">
              Domino Apunte demo
            </a>
          </p>
        </video>
        <p>
          Created for dominoes players to keep track of their score. Simple and
          very easy to use, just tapping the plus (+) button under your team's
          name a pront pops up in which you enter the points and it calculates
          your total. This is all you need. Currently available in Apple and
          Google Play Store <a href="https://dominoapunte.com">download</a> for
          FREE!
        </p>
      </article>
    </Section>
  );
};

export default DominoSection3;
