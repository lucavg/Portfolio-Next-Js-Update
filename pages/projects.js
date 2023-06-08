import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "@components/Projects/Projects";

export default function projects() {
  return (
    <ContainerBlock
      title="Projects - Luca Van Genechten"
      description="Just a student who loves to code!"
    >
      <Projects />
    </ContainerBlock>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locale/${locale}.json`),
    },
  };
}
