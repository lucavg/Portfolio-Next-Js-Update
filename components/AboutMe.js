import React from "react";
import userDataEn from "@constants/dataEn";
import userDataNl from "@constants/dataNl";
import SkillsSection from "./Skills";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Link from "next/link";

export default function AboutMe() {
  const router = useRouter();
  const data = router.locale === "nl" ? userDataNl : userDataEn;
  const t = useTranslations("AboutMe");
  const resumeLink =
    router.locale == "en"
      ? "/cv_luca_van_genechten_en.pdf"
      : "/cv_luca_van_genechten_nl.pdf";
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          {t("title")}
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {data.about.title} {t("currentProject")}
            <br />{" "}
            <a
              className="bg-blue-500 rounded-md px-2 py-1 text-white"
              href={data.about.currentProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.about.currentProject}
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          <div className="inline-flex flex-col">
            <div>
              <a
                href={`mailto:${data.email}`}
                className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="flex flex-row text-xl font-semibold text-gray-700 dark:text-gray-200">
                  {t("mail")}
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-at-fill h-5 w-5 ml-3 mt-1"
                  >
                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                  </svg>
                </h1>
              </a>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {t("jobTitle")}
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                {t("jobDescription1")}{" "}
                <Link
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  {t("jobDescriptionLink")}
                </Link>{" "}
                {t("jobDescription2")}
              </p>
            </div>
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              {t("socials")}
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={data.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="flex flex-row text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-32 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-twitter h-5 w-5 ml-3 mt-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={data.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="flex flex-row text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-32 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github h-5 w-5 ml-3 mt-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={data.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="flex flex-row text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-32 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin h-5 w-5 ml-3 mt-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            {data.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl mb-4 text-gray-700 dark:text-gray-300"
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-blue-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              {t("skills")}
            </h1>
            <SkillsSection skills={data.skills} />
          </div>
        </div>
      </div>
    </section>
  );
}
