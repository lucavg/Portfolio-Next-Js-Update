import React, { useState, useEffect } from "react";
import { Card } from "./ProjectCard";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Animate } from "react-simple-animate";

export const Grid = ({ data, filterEnabled }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [filterKey, setFilterKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const tags = Array.from(new Set(data.flatMap((item) => item.tags))).sort();
    const categories = Array.from(
      new Set(data.flatMap((item) => item.category))
    ).sort();
    setAvailableTags(tags);
    setAvailableCategories(categories);
  }, [data]);

  const handleTagSelection = (selectedOptions) => {
    setSelectedTags(selectedOptions.map((option) => option.value));
    setFilterKey((prevKey) => prevKey + 1);
  };

  const handleCategorySelection = (selectedOptions) => {
    setSelectedCategories(selectedOptions.map((option) => option.value));
    setFilterKey((prevKey) => prevKey + 1);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterItems = (
    items,
    selectedTags,
    selectedCategories,
    searchQuery
  ) => {
    let filteredItems = items;

    if (selectedTags.length > 0) {
      filteredItems = filteredItems.filter((item) =>
        item.tags.some((tag) => selectedTags.includes(tag))
      );
    }

    if (selectedCategories.length > 0) {
      filteredItems = filteredItems.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }

    if (searchQuery.trim() !== "") {
      const searchQueryLC = searchQuery.toLowerCase();
      filteredItems = filteredItems.filter((item) =>
        item.title.toLowerCase().includes(searchQueryLC)
      );
    }

    return filteredItems;
  };

  const filteredData = filterItems(
    data,
    selectedTags,
    selectedCategories,
    searchQuery
  );

  const tagOptions = availableTags.map((tag) => ({
    value: tag,
    label: tag,
  }));

  const categoryOptions = availableCategories.map((category) => ({
    value: category,
    label: category,
  }));

  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "1px solid border-gray-300",
      borderRadius: "0.375rem",
      boxShadow: state.isFocused ? "0 0 0 3px rgba(66, 153, 225, 0.5)" : "none",
      "&:hover": {
        border: "1px solid border-gray-300",
      },
      backgroundColor: "#F1F1F1 dark:bg-gray-700",
      width: "15rem",
      margin: "1rem",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.375rem",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      marginTop: "-0.5rem",
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
  };

  return (
    <div>
      {filterEnabled && (
        <div className="flex flex-col justify-evenly md:flex-row my-4 z-10">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="mx-4 px-4 py-1 bg-[#F1F1F1] dark:bg-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 my-4"
          />
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
            styles={selectStyles}
          />
          <Select
            isMulti
            isSearchable
            components={makeAnimated()}
            placeholder="Filter Categories"
            value={categoryOptions.filter((option) =>
              selectedCategories.includes(option.value)
            )}
            options={categoryOptions}
            onChange={handleCategorySelection}
            styles={selectStyles}
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
