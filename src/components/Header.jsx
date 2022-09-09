import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const Main = styled.main`
  align-items: center;
  background: linear-gradient(0deg, black 30%, var(--purplish), black 70%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 80%;
  color: #fff;
  margin: 0;
  width: 100vw;
  padding-top: 30vh;
`;
const Text = styled.p`
  font-size: ${(props) => (props.fs ? props.fs + "rem" : "3rem")};
  font-weight: ${(props) => (props.fw ? props.fw : 300)};
  max-width: 50%;
  padding: 0;
  line-height: ${(props) => props.lh};

  @media (max-width: 800px) {
    transform: scale(0.8);
    max-width: 90%;
  }
`;

const Span = styled.span`
  font-size: 2rem;
  font-weight: 300;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Text fs={6} fw={100} lh="1.3rem">
        Greetings,{" "}
        <Span>
          I am Angel Linares a Software developer with vast experience building
          stunning, fast and responsive Web and Mobile apps using React | React
          Native.
        </Span>
      </Text>
      <Button title="know more" onClick={() => navigate("/about")} />
    </Main>
  );
};

export default Header;
