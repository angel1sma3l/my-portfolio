import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import DominoSection from "../components/domino/DominoSection";
import EyeskySection from "../components/eyesky/EyeskySection";

const Projects = () => {
  const { hash } = useLocation();
  const eyeskySection = useRef();
  const dominoSection = useRef();

  useEffect(() => {
    if (hash !== "") {
      // console.log(eyeskySection.current.id);
      if ("#" + dominoSection.current.id === hash) {
        dominoSection.current.scrollIntoView();
      }
      if ("#" + eyeskySection.current.id === hash) {
        eyeskySection.current.scrollIntoView();
      }
    }
  }, [hash]);

  return (
    <>
      <EyeskySection ref={eyeskySection} />
      <DominoSection ref={dominoSection} />
    </>
  );
};

export default Projects;
