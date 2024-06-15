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
    <div className="bg-blue-600">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center w-full max-w-md mx-auto my-4 bd-black-800 underline"
      >
        <GoSearch />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="text-center color-blue"
          placeholder="Rechercher"
        />
      </form>
    </div>
  );
}

export default SearchBar;
