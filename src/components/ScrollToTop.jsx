import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import containerRef from "../context/container";

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

const ScrollToTop = ({ positionY }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    positionY > 700 ? setVisible(true) : setVisible(false);
  }, [positionY]);

  const scrollUp = () => {
    containerRef.current.scroll({ top: 0, left: 0 });
  };

  return (
    <Div visible={visible} style={styled} onClick={scrollUp}>
      <FontAwesomeIcon icon={faChevronCircleUp} size="2x" color="gray" />
    </Div>
  );
};

export default ScrollToTop;
