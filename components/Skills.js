import React from "react";
import { Animate } from "react-simple-animate";

const SkillRow = ({ name, score, icon }) => {
  return (
    <div className="flex items-center space-x-4 mb-2">
      <div className="flex-grow">
        <div className="font-semibold">{name}</div>
        <Animate
          key={name + score}
          play
          durationSeconds={1}
          start={{
            opacity: 0,
            transform: "translateX(-20px)",
          }}
          end={{
            opacity: 1,
            transform: "translateX(0)",
          }}
        >
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded">
            <div
              className="h-full bg-blue-500 dark:bg-blue-700 rounded"
              style={{ width: `${score}%` }}
            ></div>
          </div>
        </Animate>
      </div>
    </div>
  );
};

const SkillsSection = ({ skills }) => {
  const sortedSections = Object.keys(skills).sort();

  return (
    <div className="flex flex-col gap-4">
      {sortedSections.map((sectionKey) => {
        const { title, skills: sectionSkills } = skills[sectionKey];
        const sortedSkills = sectionSkills.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        return (
          <div key={sectionKey}>
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sortedSkills.map((skill, index) => (
                <SkillRow key={index} {...skill} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSection;
