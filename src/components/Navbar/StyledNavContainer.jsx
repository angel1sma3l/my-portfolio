import styled from "styled-components";
import StyledNavlink from "./StyledNavlink";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-right: auto;
  gap: 20px;

  @media (max-width: 800px) {
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
