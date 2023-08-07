import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlayerCard from "./PlayerCard";
import SearchPlayer from "./SearchPlayer";
import DropdownPositions from "./DropdownPositions";
import DropdownTeams from "./DropdownTeams";

export default function Players({allStarGoalie, allStarDefenseman, allStarRightWing, allStarLeftWing, allStarCenter,
favGoalie, favDefenseman, favRightWing, favLeftWing, favCenter}) {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("All")
  const [selectedPosition, setSelectedPosition] = useState("All"); 

  useEffect(() => {
    fetch("/players")
      .then((r) => r.json())
      .then((data) => {
        const initialPlayers = data.map((player) => ({...player, isChecked: false }));
        setPlayers(initialPlayers);
      });
  }, []);

  useEffect(() => {
    const selectedGoalie = players.find((player) => player.position === "Goalie" && player.isChecked);
    if (selectedGoalie) {
      allStarGoalie(selectedGoalie);
    } else {
      allStarGoalie(''); 
    }
  
    const selectedDefenseman = players.find((player) => player.position === "Defenseman" && player.isChecked);
    if (selectedDefenseman) {
      allStarDefenseman(selectedDefenseman);
    } else {
      allStarDefenseman(''); 
    }
  
    const selectedRightWing = players.find((player) => player.position === "Right Wing" && player.isChecked);
    if (selectedRightWing) {
      allStarRightWing(selectedRightWing);
    } else {
      allStarRightWing(''); 
    }
  
    const selectedLeftWing = players.find((player) => player.position === "Left Wing" && player.isChecked);
    if (selectedLeftWing) {
      allStarLeftWing(selectedLeftWing);
    } else {
      allStarLeftWing(''); 
    }
  
    const selectedCenter = players.find((player) => player.position === "Center" && player.isChecked);
    if (selectedCenter) {
      allStarCenter(selectedCenter);
    } else {
      allStarCenter(''); 
    }
  
  }, [players, allStarGoalie, allStarDefenseman, allStarRightWing, allStarLeftWing, allStarCenter]);

  function handleCheckboxChange(playerId) {
    setPlayers((prevPlayers) => {
      const updatedPlayers = prevPlayers.map((player) => {
        if (player.id === playerId) {
          // isChecked for selected player
          const updatedPlayer = { ...player, isChecked: !player.isChecked };
          return updatedPlayer;
        } else {
          return player;
        }
      });
  
      const selectedPlayer = updatedPlayers.find((player) => player.id === playerId);
      if (!selectedPlayer || !selectedPlayer.isChecked) {
        // unselect player
        const positionSelected = selectedPlayer ? selectedPlayer.position : null;
        return updatedPlayers.map((player) => {
          if (player.position === positionSelected) {
            // console.log(selectedPlayer)
            return { ...player, isDisabled: false }; // Enable players of same position
          } else {
            return player;
          }
        });
        
      } else {
        // select player
        return updatedPlayers.map((player) => {
          if (player.position === selectedPlayer.position) {
            // console.log(player);
            return { ...player, isDisabled: player.id !== playerId };
          } else {
            return player;
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

  const playerResults = players.filter((player) => {
    const matchesSearchTerm = player.full_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTeam = (selectedTeam === "All") || (player.current_team === selectedTeam);
    const matchesPosition = (selectedPosition === "All") || (player.position === selectedPosition);

    return matchesSearchTerm && matchesTeam && matchesPosition;
  });

  return (
    <React.Fragment>
      <h1 className="page-title">Players</h1>
      <SearchPlayer searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="draftees-header">
        <DropdownPositions selectedPosition={selectedPosition} onPositionChange={handlePositionChange} />
        <DropdownTeams selectedTeam={selectedTeam} onTeamChange={handleTeamChange} />
      </div>
      <p className="currently-selected">Select one player from each position. Currently selected: 
        <b>{favGoalie ? " Goalie, " : null}</b>
        <b>{favDefenseman ? " Defenseman, " : null}</b>
        <b>{favRightWing ? " Right Wing, " : null}</b>
        <b>{favLeftWing ? " Left Wing, " : null}</b>
        <b>{favCenter ? " Center. " : null}</b>
      </p>
      {
        playerResults.length > 0
        ?
        <Container>
          <Row>
            {playerResults.map((player) => player.active == 1 ? (
              <Col key={player.id} sm={6} md={4} lg={3}>
                <PlayerCard
                  player={player}
                  isChecked={player.isChecked}
                  onCheckboxChange={handleCheckboxChange}
                />
              </Col> 
            ):null)}
          </Row>
        </Container>
        :
        <h4 className="no-results">Sorry, no results found... please refine your search.</h4>
      }
      
    </React.Fragment>
  );
}
