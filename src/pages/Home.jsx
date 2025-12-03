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
        <h1>"Simplicity isn’t just our method — it’s our advantage."</h1>
        <ProjectList />
        <h2>
          Reach over 1 million users worldwide with DMICANO. Our flagship app,
          Domino Apunte, connects a global audience and features a built-in
          digital billboard where businesses can showcase their products
          directly to engaged users. At DMICANO, we create high-performance
          websites, mobile apps, e-commerce solutions, and interactive features
          designed to drive growth, improve user experience, and turn ideas into
          innovative digital experiences.
        </h2>
      </MyProjects>
      <ContactForm />
    </>
  );
};

export default Home;
