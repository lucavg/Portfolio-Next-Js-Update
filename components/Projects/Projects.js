import React from "react";
import userDataEn from "@constants/dataEn";
import userDataNl from "@constants/dataNl";
import { Grid } from "./ProjectGrid";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function Projects() {
  const t = useTranslations("Projects");
  const router = useRouter();
  const data = router.locale === "en" ? userDataEn : userDataNl;
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          {t("pageTitle")}
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="max-w-6xl mx-auto pt-6">
          <Grid data={data.projects} filterEnabled={true}></Grid>
        </div>
      </div>
    </section>
  );
}
