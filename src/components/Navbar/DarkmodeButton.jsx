import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const Div = styled.div`
  cursor: pointer;
  margin: 0;
  padding: 0;

  &:hover {
    color: white;
  }
`;

const DarkmodeButton = ({ theme, onThemeChange }) => {
  const handleClick = () => {
    onThemeChange(theme === "dark" ? "light" : "dark");
  };
  return (
    <Div onClick={handleClick}>
      {theme !== "dark" ? (
        <FontAwesomeIcon icon={faMoon} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="lg" />
      )}
    </Div>
  );
};

export default DarkmodeButton;
