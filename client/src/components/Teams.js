import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TeamCard from "./TeamCard";
import TeamSearch from "./TeamSearch";
import TeamDropdown from "./TeamDropdown";

export default function Teams({setRandomTeamInHome}) {
  const [teams, setTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("All");

  useEffect(() => {
    fetch("/teams")
      .then((r) => r.json())
      .then(setTeams);
  }, []);

  function handleCheckboxChange(teamId){
    const updatedTeams = teams.map((team) => {
      if (team.id === teamId) {
        return { ...team, isChecked: !team.isChecked };
      } else {
        return {...team, isChecked: false};
      }
    });
    setTeams(updatedTeams);
    const selectedTeam = teams.find((team) => team.id === teamId);
    setRandomTeamInHome(selectedTeam);
    console.log(selectedTeam)
  };

  function handleDivisionChange(division) {
    setSelectedDivision(division);
  }

  const filteredTeams = selectedDivision === 
    "All"
    ? 
    teams
    : 
    teams.filter((team) => `${team.conference} - ${team.division}` === selectedDivision);

  const teamResults = filteredTeams.filter((team) => {
    return team.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <React.Fragment>
      <h1 className="page-title">Teams</h1>
      <div className="teams-header">
        <TeamSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <TeamDropdown selectedDivision={selectedDivision} onDivisionChange={handleDivisionChange} />
      </div>
      {
        teamResults.length > 0
        ?
        <Container>
          <Row>
            {teamResults.map((team) => (
              <Col key={team.id} sm={6} md={4} lg={3}>
                <TeamCard
                  team={team}
                  isChecked={team.isChecked || false}
                  onCheckboxChange={handleCheckboxChange}
                />
              </Col>
            ))}
          </Row>
        </Container>
        :
        <h4 className="no-results">Sorry, no results found... please refine your search.</h4>
      }
      
    </React.Fragment>
  );
}
