import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Contact from "../components/Contact";

export default function contact() {
  return (
    <ContainerBlock
      title="Contact - Luca Van Genechten"
      description="Just a student who loves to code!"
    >
      <Contact />
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
