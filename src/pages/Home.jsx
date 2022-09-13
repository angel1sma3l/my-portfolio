import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  width: 100%;
  min-height: 600px;
  box-shadow: 0px 0px 38px gray;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Home = () => {
  return (
    <main>
      <Header />
      <Section>
        <ContactForm />
      </Section>
    </main>
  );
};

export default Home;
