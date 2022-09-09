import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import styled from "styled-components";

const Div = styled.div`
  display: none;
  opacity: 0;
  cursor: pointer;
  margin-left: 10px;
  transition: opacity 500ms ease-out;

  @media (max-width: 800px) {
    display: flex;
    opacity: 1;
  }
`;

const NavMenuButton = ({ toggle, onToggle }) => {
  return <Div onClick={onToggle}>{toggle ? <Close /> : <Menu />}</Div>;
};

export default NavMenuButton;
