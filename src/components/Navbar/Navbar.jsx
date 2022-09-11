import { useState } from "react";
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
  gap: 20px;
  height: 70px;
  position: relative;
  width: 100vw;
  padding: 0;
  z-index: 1;
`;

const routes = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "projects" },
  { name: "About", path: "about" },
  { name: "Contact", path: "contact" },
];

const Navbar = ({ theme, onThemeChange }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Nav>
      <NavMenuButton toggle={toggle} onToggle={() => setToggle(!toggle)} />
      <DarkmodeButton theme={theme} onThemeChange={onThemeChange} />
      <StyledDropdownContainer data={routes} visible={toggle} />
      <StyledNavContainer data={routes} />
    </Nav>
  );
};

export default Navbar;
