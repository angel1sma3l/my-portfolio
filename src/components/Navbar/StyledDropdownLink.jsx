import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #000;
  min-width: 75%;
  height: 40px;
  border-radius: 20px;
  transition: transform 333ms ease-in-out, color 1000ms ease-in-out,
    background-color 500ms ease-out;

  &:hover {
    box-shadow: 0px 0px 13px var(--accent-color);
    transform: scale(1.13);
  }
`;

const StyledDropdownLink = ({ name, path, onClick }) => {
  const styles = {
    activeLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "inherit",
      width: "100%",
      height: "100%",
      borderRadius: "inherit",
      textDecoration: "none",
      boxShadow: "0px 0px 15px var(--accent-color)",
    },
    link: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "inherit",
      width: "100%",
      height: "100%",
      borderRadius: "inherit",
      textDecoration: "none",
    },
  };

  const handleNavlinkStyle = ({ isActive }) =>
    isActive ? styles.activeLink : styles.link;

  return (
    <Div onClick={onClick}>
      <NavLink to={path} style={handleNavlinkStyle}>
        {name}
      </NavLink>
    </Div>
  );
};

export default StyledDropdownLink;
