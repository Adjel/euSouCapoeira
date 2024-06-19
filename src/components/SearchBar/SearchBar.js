"use client";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between w-full h-7 mx-0 px-4 bg-white rounded"
      >
        <GoSearch className="size-6 fill-color-dark-gray" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="flex-1 text-center"
          placeholder="Rechercher"
        />
      </form>
    </>
  );
}

export default SearchBar;
