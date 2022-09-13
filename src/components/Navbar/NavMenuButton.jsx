import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import styled from "styled-components";

const Div = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 30px;
  transition: all 500ms ease-out;

  @media (max-width: 800px) {
    display: flex;
  }
`;

const NavMenuButton = ({ toggle, onToggle }) => {
  return <Div onClick={onToggle}>{toggle ? <Close /> : <Menu />}</Div>;
};

export default NavMenuButton;
