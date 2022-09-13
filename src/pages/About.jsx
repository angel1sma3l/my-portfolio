import React from "react";
import AppText from "../components/AppText";
import Container from "../components/Container";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;

const LogosDiv = styled.section`
  display: flex;
  width: 100%;
  min-height: 100px;
  margin-top: 20px;
  margin-bottom: 50px;
  align-items: baseline;
  justify-content: space-around;
  gap: 50px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Name = styled.span`
  font-family: Snell Roundhand, cursive;
  font-size: 2.9rem;
  font-weight: 400;
  color: red;
`;

const About = () => {
  return (
    <Container>
      <Section>
        <AppText ta="center" fs="4rem" lh={0}>
          Hello!
        </AppText>
        <AppText ta="center" fs="2.1rem" fw={200}>
          My name is <Name>Angel Linares</Name> an ardent Front-end developer
          with experience leveraging JavaScript to build high performance,
          responsive websites, e-commerce sites, internal frameworks, mobile
          apps, and interactive features that drive business growth and improve
          UX.
        </AppText>

        <Div>
          Expertise:
          <LogosDiv>
            <Logo>
              <FontAwesomeIcon
                icon={faReact}
                size="3x"
                spin
                color="royalblue"
              />
              React
              <br /> React Native
            </Logo>
            <Logo>
              <FontAwesomeIcon
                icon={faJs}
                size="3x"
                enableBackground={true}
                color="orange"
              />
              JavaScript
            </Logo>
            <Logo>
              <FontAwesomeIcon icon={faHtml5} size="3x" color="#e34c26" />
              HTML
            </Logo>
            <Logo>
              <FontAwesomeIcon icon={faCss3} size="3x" color="#264de4" />
              CSS
            </Logo>
          </LogosDiv>
        </Div>

        <Div>
          Most used libraries:
          <LogosDiv>
            <AppText fw={700}>Axios</AppText>
            <AppText fw={700}>React Router</AppText>
            <AppText fw={700}>Styled Component</AppText>
          </LogosDiv>
        </Div>
      </Section>
    </Container>
  );
};

export default About;
