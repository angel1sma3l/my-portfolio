import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  color: ${(props) => props.color ?? "var(--accent-color)"};
  padding: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const AppLink = ({ title, to = "", color, rightArrow }) => {
  return (
    <Link to={to}>
      <Div color={color}>
        {title}
        {rightArrow && " >"}
      </Div>
    </Link>
  );
};

export default AppLink;
