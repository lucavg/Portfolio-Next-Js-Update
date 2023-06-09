import userDataEn from "@constants/dataEn";
import userDataNl from "@constants/dataNl";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import React from "react";

export default function Experience() {
  const router = useRouter();
  const data = router.locale === "nl" ? userDataNl : userDataEn;
  const t = useTranslations("Experience");
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          {t("pageTitle")}
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {data.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={exp.title}
                title={exp.title}
                date={exp.date}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === data.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, date, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-400 font-bold dark:text-gray-700">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      {date && <h1 className="font-semibold text-md">{date}</h1>}
      <a href={companyLink} className="text-gray-500 underline">
        {company}
      </a>
      <p
        className="text-gray-700 dark:text-gray-300 my-2"
        dangerouslySetInnerHTML={{ __html: desc }}
      ></p>
    </div>
  );
};
