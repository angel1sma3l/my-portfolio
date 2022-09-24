import styled from "styled-components";
import Section1 from "./Section1";
import Sectionn2 from "./Section2";

const Main = styled.main`
  display: flex;
  padding: 0;
  margin: 0;
  width: 100vw;

  figure {
    display: flex;
    flex-direction: row;
    width: 97vw;
    min-height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    section {
      scroll-snap-align: start;
    }
  }
`;

const EyeskySection = () => {
  return (
    <Main>
      <figure>
        <section>
          <Section1 />
        </section>
        <section>
          <Sectionn2 />
        </section>
      </figure>
    </Main>
  );
};

export default EyeskySection;
