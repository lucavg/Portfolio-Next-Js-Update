import React from "react";

const SkillBar = ({ score }) => {
  const filledPercentage = `${score}%`;

  return (
    <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded">
      <div
        className="h-full bg-blue-500 dark:bg-blue-700 rounded"
        style={{ width: filledPercentage }}
      ></div>
    </div>
  );
};

const SkillRow = ({ name, score, icon }) => {
  return (
    <div className="flex items-center space-x-4 mb-2">
      <div className="flex-grow">
        <div className="font-semibold">{name}</div>
        <SkillBar score={score} />
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
            {sortedSkills.map((skill, index) => (
              <SkillRow key={index} {...skill} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSection;
