import React from "react";
import { FiFile, FiGithub } from "react-icons/fi";

function ProjectModal({ project }) {
  const { title, imgUrl, tags, description, fileLink, githubLink } = project;

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="relative">
        <div className="flex absolute top-0 right-0 mt-2 mr-2 space-x-2 text-2xl">
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
        </div>
        <div className="h-40 overflow-hidden rounded-lg">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2 text-gray-600">{title}</h2>
      <div className="flex flex-wrap items-center mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <p
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
}

export default ProjectModal;
