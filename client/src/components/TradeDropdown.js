import React from "react";

const actions = [
  "Trade",
  "Retire",
  "Sign"
];

export default function TradeDropdown({ selectedAction, onActionChange }) {
  return (
    <div className="trade-dropdown-container">
      <label htmlFor="action">Action:</label>
      <span>
        <select
            className="trade-dropdown"
            id="action"
            value={selectedAction}
            onChange={(e) => onActionChange(e.target.value)}>
            {actions.map((action) => (
            <option key={action} value={action}>
                {action}
            </option>
            ))}
        </select>
      </span>
    </div>
  );
}
