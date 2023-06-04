import React, { useState, useEffect } from "react";
import { Card } from "./ProjectCard";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Animate } from "react-simple-animate";

export const Grid = ({ data, filterEnabled }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [filterKey, setFilterKey] = useState(0);

  useEffect(() => {
    const tags = Array.from(new Set(data.flatMap((item) => item.tags))).sort();
    setAvailableTags(tags);
  }, [data]);

  const handleTagSelection = (selectedOptions) => {
    setSelectedTags(selectedOptions.map((option) => option.value));
    setFilterKey((prevKey) => prevKey + 1);
  };

  const filterItems = (items, selectedTags) => {
    if (selectedTags.length === 0) {
      return items;
    }
    return items.filter((item) =>
      item.tags.some((tag) => selectedTags.includes(tag))
    );
  };

  const filteredData = filterItems(data, selectedTags);

  const tagOptions = availableTags.map((tag) => ({
    value: tag,
    label: tag,
  }));

  return (
    <div>
      {filterEnabled && (
        <div className="flex justify-center my-4 z-10">
          <Select
            isMulti
            isSearchable
            components={makeAnimated()}
            placeholder="Filter Tags"
            value={tagOptions.filter((option) =>
              selectedTags.includes(option.value)
            )}
            options={tagOptions}
            onChange={handleTagSelection}
            styles={{
              control: (provided, state) => ({
                ...provided,
                border: "1px solid #E2E8F0",
                borderRadius: "0.375rem",
                boxShadow: state.isFocused
                  ? "0 0 0 3px rgba(66, 153, 225, 0.5)"
                  : "none",
                "&:hover": {
                  border: "1px solid #A0AEC0",
                },
              }),
              menu: (provided) => ({
                ...provided,
                borderRadius: "0.375rem",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? "#4299E1" : "#FFFFFF",
                color: state.isSelected ? "#FFFFFF" : "#1A202C",
                "&:hover": {
                  backgroundColor: state.isSelected ? "#4299E1" : "#E2E8F0",
                  color: state.isSelected ? "#FFFFFF" : "#1A202C",
                },
              }),
            }}
          />
        </div>
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {filteredData.map((item, index) => (
          <Animate
            key={filterKey + index}
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
            <Card {...item} />
          </Animate>
        ))}
      </div>
    </div>
  );
};
