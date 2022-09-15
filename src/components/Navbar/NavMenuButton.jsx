import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

const Div = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;
  transform: ${(props) => (props.toggle ? "rotate(0deg)" : "rotate(360deg)")};

  &:hover {
    color: white;
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;

const NavMenuButton = ({ toggle, onToggle }) => {
  return (
    <Div toggle={toggle} onClick={onToggle}>
      {toggle ? (
        <FontAwesomeIcon icon={faX} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faBars} size="lg" />
      )}
    </Div>
  );
};

export default NavMenuButton;
