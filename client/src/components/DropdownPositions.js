import React from "react";

const DropdownPositions = ({ selectedPosition, onPositionChange }) => {
  const positions = [
    "All",
    "Goalie",
    "Defenseman",
    "Right Wing",
    "Left Wing",
    "Center",
  ];

  return (
    <div className="draftee-dropdown-container">
      <label htmlFor="position">Position:</label>
      <span>
        <select
          className="draftee-dropdown"
          id="position"
          value={selectedPosition}
          onChange={(e) => onPositionChange(e.target.value)}
        >
          {positions.map((position) => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};

export default DropdownPositions;
