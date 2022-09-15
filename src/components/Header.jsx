import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AppLink from "./AppLink";
import Button from "./Button";

const Main = styled.header`
  align-items: center;
  background: linear-gradient(0deg, black 40%, var(--purplish) 50%, black 80%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
  color: #fff;
  margin: 0;
  width: 100vw;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: transform 1.5s ease-in, opacity 2s ease;
  transform: ${(props) =>
    props.show ? "scale(1) rotate(360deg)" : "scale(0) rotate(0deg)"};
`;

const Text = styled.p`
  font-size: ${(props) => (props.fs ? props.fs + "rem" : "3rem")};
  font-weight: ${(props) => (props.fw ? props.fw : 300)};
  max-width: 50%;
  padding: 0;
  line-height: ${(props) => props.lh};

  @media (max-width: 800px) {
    transform: scale(0.8);
    max-width: 95%;
  }
`;

const Span = styled.span`
  font-size: 2rem;
  font-weight: 200;
`;

const Name = styled.span`
  font-family: Snell Roundhand, cursive;
  font-size: 2.5rem;
  font-weight: 500;
  color: aquamarine;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 33px;
`;

const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Main show={show}>
      <Text fs={6} fw={100} lh="1.3rem">
        Greetings,{" "}
        <Span>
          I am <Name>Angel Linares </Name>a Front-end developer who's priority
          is the user's experience, building stunning, fast and responsive Web
          and Mobile apps using React | React Native.
        </Span>
      </Text>
      <Row>
        <Button
          title="See my art"
          onClick={() => navigate("/projects")}
          borderColor="#fff"
        />
        <AppLink title="Learn more" to="/about" rightArrow />
      </Row>
    </Main>
  );
};

export default Header;
