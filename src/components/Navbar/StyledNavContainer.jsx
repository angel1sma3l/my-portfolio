import styled from "styled-components";
import StyledNavlink from "./StyledNavlink";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  opacity: 1;
  transition: opacity 1s ease, background-color 500ms ease-out;

  @media (max-width: 800px) {
    opacity: 0;
    display: none;
  }
`;

const StyledNavContainer = ({ data = [] }) => {
  return (
    <StyledDiv>
      {data.map((item, index) => (
        <StyledNavlink key={index} name={item.name} path={item.path} />
      ))}
    </StyledDiv>
  );
};

export default StyledNavContainer;
