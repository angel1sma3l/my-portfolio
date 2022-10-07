import styled from "styled-components";
import EyeskyDownload from "./EyeskyDownload";
import Webcard from "./Webcard";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 1000px;
  min-width: 95vw;
  padding: 0;
  background: linear-gradient(to bottom, darkblue, black, darkblue);
  color: white;
  box-shadow: 0px 0px 20px gray;
  scroll-snap-align: start;

  p {
    width: 700px;
    @media (max-width: 800px) {
      width: 95%;
    }
  }

  section {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 10px;
  }
`;

const Section1 = () => {
  return (
    <Container>
      <h1>Eyesky platform</h1>
      <section>
        <EyeskyDownload />
        <Webcard />
      </section>
      <p>
        This app is meant to help property managers to manage their properties
        while showing the owners things that happen with their properties such
        as maintenance request, manager announcements, payments and balance.{" "}
        <br />
        <br />
        In this app tenants can request maintenance by making a post with 3
        photos, 1 short video, a title, description of the problem and category.
        Once posted, manager and owner can see it and just the manager can
        answer back and share it with the maintenance provider via email,
        message or whatsapp.
        <br />
        <br />
        Created with React and React Native.
      </p>
    </Container>
  );
};

export default Section1;
