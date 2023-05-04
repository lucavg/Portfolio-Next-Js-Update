import React from "react";

export const Card = ({ title, link, imgUrl, description }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative rounded-md overflow-hidden group">
        <img src={imgUrl} alt="" className="w-80 h-80 object-contain mx-auto" />
        <div className="absolute inset-0 bg-gray-900 opacity-0 transition-opacity group-hover:opacity-80 overflow-y-auto">
          <div className="absolute inset-0 p-4 text-white flex items-center justify-center">
            <p className="pt-10 text-md overflow-wrap break-word pb-4">
              {description}
            </p>
          </div>
        </div>
        <h1 className="absolute top-2 left-2 z-10 text-white font-bold px-3 py-1 bg-red-500 rounded-md">
          {title}
        </h1>
      </div>
    </a>
  );
};
