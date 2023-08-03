import React from "react";

const divisions = [
  "All",
  "Eastern - Metropolitan",
  "Eastern - Atlantic",
  "Western - Central",
  "Western - Pacific",
];

export default function TeamDropdown({ selectedDivision, onDivisionChange }) {
  return (
    <div className="team-dropdown-container">
      <label htmlFor="division">Division:</label>
      <span>
        <select
            className="team-dropdown"
            id="division"
            value={selectedDivision}
            onChange={(e) => onDivisionChange(e.target.value)}>
            {divisions.map((division) => (
            <option key={division} value={division}>
                {division}
            </option>
            ))}
        </select>
      </span>
    </div>
  );
}
