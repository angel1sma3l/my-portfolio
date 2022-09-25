import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  min-height: 300px;
  margin: 0;
  padding: 0;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <Article>
        <h1>Your dream + my imagination = the source of this creation.</h1>
      </Article>
      <ContactForm />
    </>
  );
};

export default Home;
