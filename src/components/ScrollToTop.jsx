import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: "var(--text-primary)";
  display: flex;
  position: absolute;
  bottom: 50px;
  left: 50px;
  cursor: pointer;
  transform: ${(props) => (props.visible ? "scale(1)" : "scale(0)")};
  transition: transform 500ms ease;
  z-index: 3;
`;

const ScrollToTop = ({ positionY, onClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    positionY > 700 ? setVisible(true) : setVisible(false);
  }, [positionY]);

  return (
    <Div visible={visible} style={styled} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronCircleUp} size="2x" color="gray" />
    </Div>
  );
};

export default ScrollToTop;
