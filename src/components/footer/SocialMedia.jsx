import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 33px;
  font-size: 2.8rem;
`;

const IconContainer = styled.div`
  display: flex;
  color: var(--text-color);
  cursor: pointer;
  transition: transform 383ms ease;

  &:hover {
    transform: rotate(180deg);
  }
`;

const SocialMedia = () => {
  return (
    <Div>
      <IconContainer>
        <LinkedIn
          onClick={() =>
            window.open("https://www.linkedin.com/in/angel-ismael-linares")
          }
          fontSize="inherit"
        />
      </IconContainer>
      <IconContainer>
        <GitHub
          onClick={() => window.open("https://github.com/angel1sma3l")}
          fontSize="large"
        />
      </IconContainer>
    </Div>
  );
};

export default SocialMedia;
