import styled from "styled-components";

const Btn = styled.button`
  min-width: ${(props) => props.width ?? "150px"};
  background-color: ${(props) => props.bgColor ?? "transparent"};
  border: ${(props) =>
    props.borderColor ? "1px solid " + props.borderColor : "none"};
  height: 40px;
  border-radius: 22px;
  color: ${(props) =>
    props.disabled ? "lightgray" : props.color ? props.color : "white"};
  font-size: 1.3rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 500ms ease-out, color 800ms ease;

  &:hover {
    background-color: ${(props) => props.hoverBg ?? "aquamarine"};
    color: ${(props) => props.hoverColor ?? "black"};
  }
`;

const Button = ({
  title = "Submit",
  borderColor,
  onClick,
  type = "button",
  hoverColor,
  hoverBg,
  color,
  bgColor,
  disabled,
}) => {
  return (
    <Btn
      disabled={disabled}
      onClick={onClick}
      type={type}
      hoverBg={hoverBg}
      hoverColor={hoverColor}
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
    >
      {title}
    </Btn>
  );
};

export default Button;
