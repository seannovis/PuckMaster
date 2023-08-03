import React, {useState, useEffect} from "react";

export default function DropdownTeams({ selectedTeam, onTeamChange }) {

  const [teams, setTeams] = useState([])

  const dropdownTeams = ["All"]
  teams.map((team) => (
    dropdownTeams.push(team.name)
  ))
  
    useEffect(() => {
      fetch("/teams")
        .then((r) => r.json())
        .then(setTeams);
    }, []);
     
  
    return (
    <div className="draftee-dropdown-container">
      <label htmlFor="team">Team:</label>
      <span>
        <select
            className="draftee-dropdown"
            id="team"
            value={selectedTeam}
            onChange={(e) => onTeamChange(e.target.value)}>
            {dropdownTeams.map((team) => (
            <option key={team} value={team}>
                {team}
            </option>
            ))}
        </select>
      </span>
    </div>
  );
}
