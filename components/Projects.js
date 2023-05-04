import React, { useState } from "react";
import userData from "@constants/data";
import classNames from "classnames";
import { Grid } from "./ProjectGrid";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      <div className="bg-white dark:bg-gray-900 -mt-4">
        <div className="max-w-6xl mx-auto pt-6">
          <Grid data={userData.projects}></Grid>
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number, publicProject }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const overlayClasses = classNames(
    "absolute inset-0 bg-gray-800 opacity-50 transition-opacity",
    {
      "opacity-0 pointer-events-none": !showOverlay,
    }
  );

  const description =
    publicProject ||
    "The project is in a private repository due to security reasons";

  return (
    <div
      className="w-full block shadow-2xl relative"
      onMouseEnter={toggleOverlay}
      onMouseLeave={toggleOverlay}
    >
      {publicProject ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="relative overflow-hidden">
            <img
              src={imgUrl}
              alt={title}
              className="transform transition duration-2000 ease-out object-cover h-full w-full"
            />
            <div className={overlayClasses}>
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
                {description}
              </p>
            </div>
            <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
              {title}
            </h1>
            <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
              {number.length === 1 ? "0" + number : number}
            </h1>
          </div>
        </a>
      ) : (
        <div className="relative overflow-hidden">
          <img
            src={imgUrl}
            alt={title}
            className="transform transition duration-2000 ease-out object-cover h-full w-full"
          />
          <div className={overlayClasses}>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
              {description}
            </p>
          </div>
          <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
            {title}
          </h1>
          <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
            {number.length === 1 ? "0" + number : number}
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-500 p-2 rounded-md text-center text-white cursor-pointer">
              <p>
                The project is in a private repository due to security reasons
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
