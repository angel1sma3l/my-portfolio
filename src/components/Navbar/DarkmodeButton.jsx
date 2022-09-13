import DarkModeOutlined from "@material-ui/icons/NightsStay";
import LightMode from "@material-ui/icons/WbSunny";

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
        <DarkModeOutlined fontSize="small" />
      ) : (
        <LightMode fontSize="small" />
      )}
    </div>
  );
};

export default DarkmodeButton;
