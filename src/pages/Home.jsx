import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";
import ProjectList from "../components/ProjectList";

const MyProjects = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  min-height: max-content;
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
      <MyProjects>
        <h1>Your dream + my imagination = the source of this creation.</h1>
        <ProjectList />
      </MyProjects>
      <ContactForm />
    </>
  );
};

export default Home;
