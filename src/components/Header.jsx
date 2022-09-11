import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AppLink from "./AppLink";
import Button from "./Button";

const Main = styled.header`
  align-items: center;
  background: linear-gradient(0deg, black 30%, var(--purplish), black 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
  color: #fff;
  margin: 0;
  width: 100vw;
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
  font-weight: 300;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 33px;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Text fs={6} fw={100} lh="1rem">
        Greetings,{" "}
        <Span>
          I am Angel Linares a Software developer with vast experience building
          stunning, fast and responsive Web and Mobile apps using React | React
          Native.
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
