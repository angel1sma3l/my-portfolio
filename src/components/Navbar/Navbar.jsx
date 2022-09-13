import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import StyledDropdownContainer from "./StyledDropdownContainer";
import DarkmodeButton from "./DarkmodeButton";
import NavMenuButton from "./NavMenuButton";
import StyledNavContainer from "./StyledNavContainer";

const Nav = styled.nav`
  align-items: center;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: row;
  min-height: 70px;
  max-height: 70px;
  position: fixed;
  width: 100vw;
  padding: 0;
  z-index: 3;
  transition: transform 1s ease;
  transition-delay: 383ms;

  transform: ${(props) =>
    props.hide ? "translateY(-70px)" : "translateY(0px)"};
`;

const routes = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "projects" },
  { name: "About", path: "about" },
  { name: "Contact", path: "contact" },
];

const Navbar = ({ theme, onThemeChange, scrollY }) => {
  const [toggle, setToggle] = useState(false);
  const [hide, setHide] = useState(false);
  const currPos = useRef(0);

  useEffect(() => {
    if (scrollY > currPos.current) setHide(true);
    else {
      setHide(false);
    }
    currPos.current = scrollY;
  }, [scrollY]);

  return (
    <Nav hide={hide}>
      <NavMenuButton toggle={toggle} onToggle={() => setToggle(!toggle)} />
      <DarkmodeButton theme={theme} onThemeChange={onThemeChange} />
      <StyledDropdownContainer data={routes} visible={toggle} />
      <StyledNavContainer data={routes} />
    </Nav>
  );
};

export default Navbar;
