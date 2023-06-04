import React from "react";
import userData from "@constants/data";
import { Grid } from "./ProjectGrid";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="max-w-6xl mx-auto pt-6">
          <Grid data={userData.projects} filterEnabled={true}></Grid>
        </div>
      </div>
    </section>
  );
}
