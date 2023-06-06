import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";

export default function about() {
  return (
    <ContainerBlock
      title="About Me - Luca Van Genechten"
      description="Just a student who loves to code!"
    >
      <AboutMe />
    </ContainerBlock>
  );
}
