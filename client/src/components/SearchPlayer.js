import React from "react";

export default function SearchPlayer({ searchTerm, onSearchChange }) {
    return (
      <div className="searchbar">
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          placeholder="Player name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  }

  