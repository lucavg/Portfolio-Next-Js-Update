import { useTranslations } from "next-intl";
import React from "react";
import { FiFile, FiGithub, FiLink } from "react-icons/fi";
import ReactPlayer from "react-player";

function ProjectModal({ fullProject }) {
  const t = useTranslations("Projects");
  const {
    title,
    imgUrl,
    participants,
    tags,
    category,
    project,
    image,
    development,
    learned,
    fileLink,
    hyperLink,
    githubLink,
    videoLink,
  } = fullProject;

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="relative">
        <div className="flex absolute top-0 right-0 -mt-2 mr-2 space-x-2 text-2xl">
          {fileLink && (
            <a
              href={fileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 flex items-center"
            >
              <FiFile className="mr-1" />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 flex items-center"
            >
              <FiGithub className="mr-1" />
            </a>
          )}
          {hyperLink && (
            <a
              href={hyperLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 flex items-center"
            >
              <FiLink className="mr-1" />
            </a>
          )}
        </div>
        <div className="h-40 overflow-hidden rounded-lg">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-600">{title}</h2>
      <div className="text-sm font-bold mb-2 text-gray-400">{category}</div>
      <div className="flex flex-wrap items-center">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      {participants && (
        <div className="text-sm font-bold mb-2 text-gray-400">
          {t("participants")} {participants}
        </div>
      )}
      {participants && <div className="flex flex-wrap items-center"></div>}
      <h1 className="text-lg font-bold mb-2 text-gray-600">{t("subtitle1")}</h1>
      <p
        className="text-gray-600 mb-3 SearchResult-body"
        dangerouslySetInnerHTML={{
          __html: project,
        }}
      ></p>
      <h1 className="text-lg font-bold mb-2 text-gray-600">{t("subtitle2")}</h1>
      <p
        className="text-gray-600 mb-3"
        dangerouslySetInnerHTML={{
          __html: development,
        }}
      ></p>
      <h1 className="text-lg font-bold mb-2 text-gray-600">{t("subtitle3")}</h1>
      <p
        className="text-gray-600 mb-3"
        dangerouslySetInnerHTML={{
          __html: learned,
        }}
      ></p>
      {image && <img className="max-h-96 mx-auto" src={image} alt={image} />}
      {videoLink && <ReactPlayer url={videoLink} controls={true} />}
    </div>
  );
}

export default ProjectModal;
