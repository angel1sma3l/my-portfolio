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

const About = () => {
  useScrollToTop();

  return (
    <Section>
      <AppText ta="center" fs="2.1rem" width="50%">
        DMICANO is a creative technology studio specializing in
        high-performance, responsive digital experiences. We design and develop
        websites, mobile apps, e-commerce solutions, and interactive features
        that drive business growth and elevate user experience. Our flagship
        app, Domino Apunte, is used worldwide and has over 1 million users,
        featuring a built-in digital billboard that gives businesses a unique
        opportunity to advertise their products directly to a large, engaged
        audience. Our work is rooted in strong technical expertise, thoughtful
        design, and a commitment to simplicity and innovation.
      </AppText>

      <Div>
        Expertise:
        <LogosDiv>
          <Logo>
            <FontAwesomeIcon icon={faReact} size="3x" spin color="royalblue" />
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
  );
};

export default About;
