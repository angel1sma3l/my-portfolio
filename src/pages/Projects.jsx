import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import DominoSection from "../components/domino/DominoSection";
import EyeskySection from "../components/eyesky/EyeskySection";
import EcommerceSection from "../components/e-commerce/EcommerceSection";
import HteamSection from "../components/hteam/HteamSection";

const Projects = () => {
  const { hash } = useLocation();
  const eyeskySection = useRef();
  const dominoSection = useRef();
  const ecommerceSection = useRef();
  const hteamSection = useRef();

  useEffect(() => {
    if (hash !== "") {
      // console.log(eyeskySection.current.id);
      if ("#" + dominoSection.current.id === hash) {
        dominoSection.current.scrollIntoView();
      }
      if ("#" + eyeskySection.current.id === hash) {
        eyeskySection.current.scrollIntoView();
      }

      if ("#" + ecommerceSection.current.id === hash) {
        ecommerceSection.current.scrollIntoView();
      }
      if ("#" + hteamSection.current.id === hash) {
        hteamSection.current.scrollIntoView();
      }
    }
  }, [hash]);

  return (
    <>
      <EyeskySection ref={eyeskySection} />
      <EcommerceSection ref={ecommerceSection} />
      <DominoSection ref={dominoSection} />
      <HteamSection ref={hteamSection} />
    </>
  );
};

export default Projects;
