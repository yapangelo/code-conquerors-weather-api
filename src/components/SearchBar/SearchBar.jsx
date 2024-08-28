import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="location__input"
      />
      {/* <button type="submit">Search</button> */}
    </form>
  );
};

export default SearchBar;
