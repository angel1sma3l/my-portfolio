import styled from "styled-components";
import AppText from "../AppText";
import EyeskyDownload from "./EyeskyDownload";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 800px;
  background: linear-gradient(to bottom, black, blue);
  color: white;
`;

const Section1 = () => {
  return (
    <Div>
      <AppText fs="3rem" color="white">
        Eyesky platform
      </AppText>
      <AppText fs="1.5rem" width="50%">
        This app is meant to help property managers to manage their properties
        while showing the owners things that happen with their properties such
        as maintenance request, manager announcements, payments and balance.{" "}
        <br /> <br />
        In this app tenants can request maintenance by making a post with 3
        photos, 1 short video, a title, description of the problem and category.
        Once posted, manager and owner can see it and just the manager can
        answer back and share it with the maintenance provider via email,
        message or whatsapp.
        <br />
        <br />I created this app using React and React Native. It is currently
        available in Play Store, App Store and eyesky.org.
      </AppText>
      <EyeskyDownload />
    </Div>
  );
};

export default Section1;
