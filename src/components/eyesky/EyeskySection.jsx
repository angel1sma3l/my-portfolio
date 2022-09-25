import styled from "styled-components";
import Section1 from "./Section1";
import Sectionn2 from "./Section2";

const Article = styled.article`
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
    <Article>
      <figure>
        <section>
          <Section1 />
        </section>
        <section>
          <Sectionn2 />
        </section>
      </figure>
    </Article>
  );
};

export default EyeskySection;
