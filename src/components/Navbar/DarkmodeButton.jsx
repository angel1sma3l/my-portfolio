import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const DarkmodeButton = ({ theme, onThemeChange }) => {
  const container = {
    cursor: "pointer",
    marginLeft: 30,
    marginRight: 30,
    padding: 0,
  };

  const handleClick = () => {
    onThemeChange(theme === "dark" ? "light" : "dark");
  };
  return (
    <div style={container} onClick={handleClick}>
      {theme !== "dark" ? (
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </div>
  );
};

export default DarkmodeButton;
