import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
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
  return (
    <Div onClick={onToggle}>
      {toggle ? (
        <FontAwesomeIcon icon={faX} />
      ) : (
        <FontAwesomeIcon icon={faBars} />
      )}
    </Div>
  );
};

export default NavMenuButton;
