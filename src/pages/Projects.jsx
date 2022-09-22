import React from "react";
import AppText from "../components/AppText";
import DominoSection from "../components/domino/DominoSection";
import EyeskySection from "../components/eyesky/EyeskySection";

const Projects = () => {
  return (
    <>
      <AppText fs="4rem">Projects</AppText>
      <EyeskySection />
      <DominoSection />
      <AppText fs="3rem">
        Your dream + my imagination = the source of this creation.
      </AppText>
    </>
  );
};

export default Projects;
