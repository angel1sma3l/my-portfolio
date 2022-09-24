import React from "react";
import AppText from "../components/AppText";
import DominoSection from "../components/domino/DominoSection";
import EyeskySection from "../components/eyesky/EyeskySection";

const Projects = () => {
  return (
    <>
      <AppText fs="3rem" width="50%" ta="center">
        Your dream + my imagination = the source of this creation.
      </AppText>

      <EyeskySection />
      <DominoSection />
    </>
  );
};

export default Projects;
