import styled from "styled-components";
import StyledDropdownNav from "./StyledDropdownLink";

const StyledDiv = styled.div`
  display: flex;
  position: absolute;
  top: 60px;
  left: 0;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 20px 0px;
  gap: 20px;
  margin: 0;
  background-color: #00000099;
  transition: transform 383ms ease-in-out, background-color 500ms ease-out;
  box-shadow: 3px 3px 23px var(--accent-color);
  transform: ${(props) =>
    props.visible ? "translateY(0px)" : "translateY(-330px)"};
  z-index: -1;

  @media (min-width: 800px) {
    display: none;
  }
`;

const StyledDropdownContainer = ({ data = [], visible, onClickClose }) => {
  return (
    <StyledDiv visible={visible}>
      {data.map((item, index) => (
        <StyledDropdownNav
          key={index}
          path={item.path}
          name={item.name}
          onClick={onClickClose}
        />
      ))}
    </StyledDiv>
  );
};

export default StyledDropdownContainer;
