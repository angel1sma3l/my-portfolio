import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 130px;
  height: 30px;
  border-radius: 15px;
  box-shadow: 0px 0px 0px var(--accent-color);
  transition: transform 333ms ease-in-out;

  &:hover {
    box-shadow: 3px 3px 13px var(--accent-color);
    transform: scale(1.13);
  }
`;

const StyledNavlink = ({ name, path }) => {
  const styles = {
    activeLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "inherit",
      width: "100%",
      height: "100%",
      borderRadius: 20,
      textDecoration: "none",
      boxShadow: "3px 3px 13px var(--accent-color)",
    },
    link: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "inherit",
      width: "100%",
      height: "100%",
      borderRadius: 20,
      textDecoration: "none",
    },
  };

  const handleNavlinkStyle = ({ isActive }) =>
    isActive ? styles.activeLink : styles.link;

  return (
    <Div>
      <NavLink to={path} style={handleNavlinkStyle}>
        {name}
      </NavLink>
    </Div>
  );
};

export default StyledNavlink;
