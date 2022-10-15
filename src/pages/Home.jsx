import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";
import ProjectList from "../components/ProjectList";

const MyProjects = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1000px;
  min-height: max-content;
  margin: 0;
  padding: 100px 0;
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
