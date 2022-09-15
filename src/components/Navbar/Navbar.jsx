import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import StyledDropdownContainer from "./StyledDropdownContainer";
import DarkmodeButton from "./DarkmodeButton";
import NavMenuButton from "./NavMenuButton";
import StyledNavContainer from "./StyledNavContainer";
import logo from "../../assets/dmicano-logo.png";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 60px;
  background-color: #000;
  padding: 0;
  margin: 0;
  position: fixed;
  transition: transform 1s ease;
  transition-delay: 383ms;
  transform: ${(props) =>
    props.hide ? "translateY(-70px)" : "translateY(0px)"};
  z-index: 3;
`;

const Nav = styled.nav`
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  color: var(--light-violet);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 60px;
  max-height: 60px;
  width: 100vw;
  padding: 0px;

  @media (max-width: 800px) {
    width: 100vw;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  padding: 0px 20px;
  color: var(--light-violet);
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0px 20px;
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
    <Main hide={hide}>
      <Nav>
        <Brand>
          <img src={logo} width="45px" height="auto" alt="dmicano" /> dmicano
        </Brand>
        <StyledNavContainer data={routes} />
        <Menu>
          <DarkmodeButton theme={theme} onThemeChange={onThemeChange} />
          <NavMenuButton toggle={toggle} onToggle={() => setToggle(!toggle)} />
        </Menu>
        <StyledDropdownContainer data={routes} visible={toggle} />
      </Nav>
    </Main>
  );
};

export default Navbar;
