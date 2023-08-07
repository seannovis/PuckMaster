import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DrafteeCard from "./DrafteeCard";
import SearchPlayer from "./SearchPlayer";
import DropdownPositions from "./DropdownPositions";
import DropdownTeams from "./DropdownTeams";

export default function Draftees({allRookieGoalie, allRookieDefenseman, allRookieRightWing, allRookieLeftWing, allRookieCenter,
rookieGoalie, rookieDefenseman, rookieRightWing, rookieLeftWing, rookieCenter}) {
  const [draftees, setDraftees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("All")
  const [selectedPosition, setSelectedPosition] = useState("All"); 

  useEffect(() => {
    fetch("/draftees")
      .then((r) => r.json())
      .then((data) => {
        const initialDraftees = data.map((draftee) => ({...draftee, isChecked: false }));
        setDraftees(initialDraftees);
      });
  }, []);

  useEffect(() => {
    const selectedGoalie = draftees.find((draftee) => draftee.position === "Goalie" && draftee.isChecked);
    if (selectedGoalie) {
      allRookieGoalie(selectedGoalie);
    } else {
      allRookieGoalie(''); 
    }
  
    const selectedDefenseman = draftees.find((draftee) => draftee.position === "Defenseman" && draftee.isChecked);
    if (selectedDefenseman) {
      allRookieDefenseman(selectedDefenseman);
    } else {
      allRookieDefenseman(''); 
    }
  
    const selectedRightWing = draftees.find((draftee) => draftee.position === "Right Wing" && draftee.isChecked);
    if (selectedRightWing) {
      allRookieRightWing(selectedRightWing);
    } else {
      allRookieRightWing(''); 
    }
  
    const selectedLeftWing = draftees.find((draftee) => draftee.position === "Left Wing" && draftee.isChecked);
    if (selectedLeftWing) {
      allRookieLeftWing(selectedLeftWing);
    } else {
      allRookieLeftWing(''); 
    }
  
    const selectedCenter = draftees.find((draftee) => draftee.position === "Center" && draftee.isChecked);
    if (selectedCenter) {
      allRookieCenter(selectedCenter);
    } else {
      allRookieCenter(''); 
    }
  
  }, [draftees, allRookieGoalie, allRookieDefenseman, allRookieRightWing, allRookieLeftWing, allRookieCenter]);

  function handleCheckboxChange(drafteeId) {
    setDraftees((prevDraftees) => {
      const updatedDraftees = prevDraftees.map((draftee) => {
        if (draftee.id === drafteeId) {
          // Toggle isChecked for the selected player
          const updatedDraftee = { ...draftee, isChecked: !draftee.isChecked };
          return updatedDraftee;
        } else {
          return draftee;
        }
      });
  
      const selectedDraftee = updatedDraftees.find((draftee) => draftee.id === drafteeId);
      if (!selectedDraftee || !selectedDraftee.isChecked) {
        // Unselecting a player
        const positionSelected = selectedDraftee ? selectedDraftee.position : null;
        return updatedDraftees.map((draftee) => {
          if (draftee.position === positionSelected) {
            return { ...draftee, isDisabled: false }; // Enable players of the same position
          } else {
            return draftee;
          }
        });
      } else {
        // Selecting a player
        return updatedDraftees.map((draftee) => {
          if (draftee.position === selectedDraftee.position) {
            return { ...draftee, isDisabled: draftee.id !== drafteeId };
          } else {
            return draftee;
          }
        });
      }
    });
  }

  function handleTeamChange(team) {
    setSelectedTeam(team);
  }

  function handlePositionChange(position) {
    setSelectedPosition(position);
  }

  const drafteeResults = draftees.filter((draftee) => {
    const matchesSearchTerm = draftee.full_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTeam = (selectedTeam === "All") || (draftee.current_team === selectedTeam);
    const matchesPosition = (selectedPosition === "All") || (draftee.position === selectedPosition);

    return matchesSearchTerm && matchesTeam && matchesPosition;
  });

  return (
    <React.Fragment>
      <h1 className="page-title">2023 Draft</h1>
      <SearchPlayer searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="draftees-header">
        <DropdownPositions selectedPosition={selectedPosition} onPositionChange={handlePositionChange} />
        <DropdownTeams selectedTeam={selectedTeam} onTeamChange={handleTeamChange} />
      </div>
      <p className="currently-selected">Select one player from each position. Currently selected: 
        <b>{rookieGoalie ? " Goalie, " : null}</b>
        <b>{rookieDefenseman ? " Defenseman, " : null}</b>
        <b>{rookieRightWing ? " Right Wing, " : null}</b>
        <b>{rookieLeftWing ? " Left Wing, " : null}</b>
        <b>{rookieCenter ? " Center. " : null}</b>
      </p>
      {
        drafteeResults.length > 0
        ?
        <Container>
        <Row>
          {drafteeResults.map((draftee) => (
            <Col key={draftee.id} sm={6} md={4} lg={3}>
              <DrafteeCard
                draftee={draftee}
                isChecked={draftee.isChecked}
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