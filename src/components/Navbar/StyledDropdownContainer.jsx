import styled from "styled-components";
import StyledDropdownNav from "./StyledDropdownLink";

const StyledDiv = styled.div`
  display: flex;
  position: absolute;
  top: 70px;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 10px 0px;
  margin: 0;
  background-color: var(--bg-color);
  transition: transform 383ms ease-in-out, background-color 500ms ease-out;
  box-shadow: 3px 3px 23px var(--accent-color);
  z-index: 2;

  transform: ${(props) =>
    props.visible ? "translateX(0px)" : "translateX(-210px)"};
`;

const StyledDropdownContainer = ({ data = [], visible }) => {
  return (
    <StyledDiv visible={visible}>
      {data.map((item, index) => (
        <StyledDropdownNav key={index} path={item.path} name={item.name} />
      ))}
    </StyledDiv>
  );
};

export default StyledDropdownContainer;
