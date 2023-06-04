import Link from "next/link";
import React from "react";

export default function Resume() {
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden mt-5">
      <div className="w-full md:w-1/2 max-w-md mx-auto text-center md:text-left lg:p-20">
        <Link
          href="/cv_luca_van_genechten.pdf"
          className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 justify-evenly items-center dark:text-gray-700"
          target="_blank"
          locale="false"
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
          <p>Grab my resume!</p>
        </Link>
      </div>
    </div>
  );
}
