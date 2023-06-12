import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Resume() {
  const t = useTranslations("Resume");
  const router = useRouter();
  const href =
    router.locale == "en"
      ? "/cv_luca_van_genechten_en.pdf"
      : "/cv_luca_van_genechten_nl.pdf";
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden mt-5">
      <div className="w-full md:w-1/2 max-w-md mx-auto text-center md:text-left lg:p-20">
        <Link
          href={href}
          className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 justify-evenly items-center dark:text-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-arrow-up-right-square"
            stroke="4"
            strokeWidth="4"
            viewBox="0 0 24 24"
          >
            <path d="M17 13v-13h-2v5h-2v-3h-2v7h-2v-9h-2v13h-6l11 11 11-11z" />
          </svg>
          <p>{t("button")}</p>
        </Link>
      </div>
    </div>
  );
}
