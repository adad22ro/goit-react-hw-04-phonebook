import React from 'react';

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="search-bar">
      <h2>Contacts</h2>
      <input
        type="text"
        placeholder="Search Contacts"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;
