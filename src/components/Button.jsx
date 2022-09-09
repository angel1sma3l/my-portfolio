import { useRef } from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: ${(props) => props.width ?? "200px"};
  background-color: ${(props) => props.bgColor ?? "transparent"};
  border: 0.5px solid white;
  height: 50px;
  border-radius: 25px;
  color: ${(props) => props.color ?? "white"};
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 500ms ease-out, color 800ms ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const Button = ({ title = "Submit", onClick }) => {
  return (
    <Btn onClick={onClick} type="button">
      {title}
    </Btn>
  );
};

export default Button;
