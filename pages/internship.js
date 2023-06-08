import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Internship from "@components/Internship";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export default function internship() {
  const router = useRouter();
  const t = useTranslations("Internship");
  return (
    <ContainerBlock
      title="Internship - Luca Van Genechten"
      description="Just a student who loves to code!"
    >
      <Internship />
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
