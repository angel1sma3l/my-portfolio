import styled from "styled-components";
import AppText from "../AppText";
import EyeskyDownload from "./EyeskyDownload";
import Webcard from "./Webcard";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  height: 1000px;
  width: 100vw;
  padding: 0;
  background: linear-gradient(to bottom, darkblue, black, darkblue);
  color: white;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const Section1 = () => {
  return (
    <Div>
      <AppText fs="3rem">Eyesky platform</AppText>
      <Row>
        <EyeskyDownload />
        <Webcard />
      </Row>
      <AppText fs="1.5rem" width="50%">
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
      </AppText>
    </Div>
  );
};

export default Section1;
