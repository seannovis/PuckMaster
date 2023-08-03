import React from "react";

export default function TeamSearch({ searchTerm, onSearchChange }) {
    return (
      <div className="searchbar">
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          placeholder="Team name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  }

  