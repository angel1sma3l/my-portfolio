import React from "react";
import AppText from "../components/AppText";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import useScrollToTop from "../hooks/useScrollToTop";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 0px 30px;
  width: 40rem;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
  align-items: center;
  padding: 50px 0px;
  width: 100%;
`;

const LogosDiv = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
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
  useScrollToTop();

  return (
    <>
      <AppText ta="center" fs="4rem">
        Hello!
      </AppText>
      <Section>
        <AppText ta="center" fs="2.1rem" width="40rem">
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
              <FontAwesomeIcon icon={faJs} size="3x" color="orange" />
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

        <Div>
          Education:
          <br />
          <br />
          BS in Information Technology. @ Kaplan University 2017
        </Div>
      </Section>
    </>
  );
};

export default About;
