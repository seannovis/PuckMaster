import React, {useState, useEffect} from "react";
import TradeDropdown from "./TradeDropdown";
import img from "../helpers/arrows.png";
import { Link } from "react-router-dom";
import Snackbar from "./Snackbar";

export default function TradeCentre({user}){

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

    const [action, setAction] = useState("Trade");
    const [teams, setTeams] = useState([]);
    const [players, setPlayers] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedPlayer, setselectedPlayer] = useState('');
    const [retireError, setRetireError] = useState([])
    const [errors, setErrors] = useState([]);
    const [snackbar, setSnackbar] = useState(false);
    const [errorSnackbar, setErrorSnackbar] = useState(false);

    const [playerTradesLeft, setPlayerTradesLeft] = useState([{selectedPlayer: ''},]);
    const [pickTradesLeft, setPickTradesLeft] = useState([{ round: '', pick: '' }]);
    const [pickTradesRight, setPickTradesRight] = useState([{ round: '', pick: '' }]);
    const [playerTradesRight, setPlayerTradesRight] = useState([{selectedPlayer: ''},]);
    const [selectedTeamRight, setSelectedTeamRight] = useState('');
    const [selectedTeamLeft, setSelectedTeamLeft] = useState('');
    const [playersRight, setPlayersRight] = useState([]);
    const [playersLeft, setPlayersLeft] = useState([]);
    const [selectedPlayerRight, setSelectedPlayerRight] = useState('');
    const [selectedPlayerLeft, setSelectedPlayerLeft] = useState('');
    const [nameLeft, setNameLeft] = useState('');
    const [nameRight, setNameRight] = useState('');
    const [imgLeft, setImgLeft] = useState('');
    const [imgRight, setImgRight] = useState('');
    const [rightError, setRightError] = useState([]);
    const [leftError, setLeftError] = useState([]);

    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [position, setPosition] = useState('');
    const [jersey, setJersey] = useState('');
    const [hand, setHand] = useState('');
    const [id, setId] = useState('');

    function handleActionChange(action) {
        setAction(action);
    }

    useEffect(() => {
        fetch("/teams")
          .then((r) => r.json())
          .then((data) => {
            setTeams(data);
          });
      }, []);

    useEffect(() => {
        if (selectedTeam) {
            fetchPlayers(selectedTeam);
        } else {
            setPlayers([]);
        }
    }, [selectedTeam]);

    function fetchPlayers(teamId){
        fetch(`/teams/${teamId}/players`)
        .then((r) => r.json())
        .then((data) => {
            setPlayers(data.players)
        })
    }

    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
  
      fetch('/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: name,
          current_team: team,
          position: position,
          jersey_number: jersey,
          hand: hand,
          team_id: id,
          previous_teams: "None"
        }),
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((p) => {
                console.log(p);
                setTeam('');
                setName('');
                setJersey('');
                setPosition('');
                setHand('');
                setId('');
            });
          } else {
            r.json().then((err) => {
                if (err.errors) {
                    setErrors(err.errors)
                } else if (err.error) {
                    setErrors([err.error]);
                }
            });
          }
        });
    }

    function tradeLeft(){
        fetch(`/players/${selectedPlayerLeft}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ current_team: nameRight, team_id: selectedTeamRight }), 
          })
          .then((r) => {
              if (r.ok) {
                r.json().then((t) => {
                    console.log(t)
                    setPlayerTradesLeft([{selectedPlayer: ''},]);
                    setSelectedPlayerLeft('');
                });
            } else {
                r.json().then((err) => {
                    setLeftError(err.error);
                    setErrorSnackbar(true);
                });
              }}
        );  
        setSnackbar(true)
    }

    function tradeRight(){
        fetch(`/players/${selectedPlayerRight}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ current_team: nameLeft, team_id: selectedTeamLeft }), 
          })
          .then((r) => {
              if (r.ok) {
                r.json().then((t) => {
                    console.log(t);
                    setPlayerTradesRight([{selectedPlayer: ''},]);
                    setSelectedPlayerRight('');
                });
            } else {
                r.json().then((err) => {
                    setRightError(err.error);
                    setErrorSnackbar(true);
                });
              }
            }
        );   
        setSnackbar(true);
    }

    function reset() {
        setSelectedTeamLeft('');
        setSelectedTeamRight('');
        setPlayerTradesLeft([{selectedPlayer: ''},]);
        setPlayerTradesRight([{selectedPlayer: ''},]);
        setPickTradesLeft([{ round: '', pick: '' }]);
        setPickTradesRight([{ round: '', pick: '' }]);
    }

    function pickupTeam(e) {
        const teamId = e.target.value;
        setId(teamId);
        const selectedTeam = teams.find((team) => team.id === parseInt(teamId));
        setTeam(selectedTeam.name); 
    }

    function handleTeamChange(e) {  
        const teamId = e.target.value;
        setSelectedTeam(teamId);
        setselectedPlayer('');
        if (teamId) {
            fetchPlayers(teamId);
        }
    }

    function handleLeftTradeChange(e) {
        const teamId = e.target.value;
        setSelectedTeamLeft(teamId);
        setselectedPlayer('');
        if (teamId) {
            fetchPlayersLeft(teamId);
            fetchTeamLeft(teamId);
        }
    }

    function fetchPlayersLeft(teamId) {
        fetch(`/teams/${teamId}/players`)
        .then((r) => r.json())
        .then((data) => {
            setPlayersLeft(data.players);
        })
    }

    function fetchTeamLeft(teamId) {
        fetch(`/teams/${teamId}`)
        .then((r) => r.json())
        .then((data) => {
            setNameLeft(data.name);
            setImgLeft(data.image_url);
        })
    }

    function handleRightTradeChange(e) {
        const teamId = e.target.value;
        setSelectedTeamRight(teamId);
        setselectedPlayer('');
        if (teamId) {
            fetchPlayersRight(teamId);
            fetchTeamRight(teamId);
        }
    }

    function fetchPlayersRight(teamId) {
        fetch(`/teams/${teamId}/players`)
        .then((r) => r.json())
        .then((data) => {
            setPlayersRight(data.players);
        })
    }

    function fetchTeamRight(teamId) {
        fetch(`/teams/${teamId}`)
        .then((r) => r.json())
        .then((data) => {
            setNameRight(data.name);
            setImgRight(data.image_url);
        })
    }

    function handlePlayerChange(e) {
        setselectedPlayer(e.target.value);
    }

    function retirePlayer() {
        fetch(`/players/${selectedPlayer}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ active: false }), 
        })
        .then((r) => {
            if (r.ok) {
              r.json().then((p) => {
                console.log(p)
                setSelectedTeam('');
                setselectedPlayer('');
              });
            } else {
              r.json().then((err) => {
                  setRetireError(err.error);
              });
            }
          });
    }

    function handleLeftPlayerChange(e, index) {
        const selectedPlayerValue = e.target.value;
        setPlayerTradesLeft((prevTrades) =>
          prevTrades.map((trade, i) => {
            if (i === index) {
              return { selectedPlayer: selectedPlayerValue };
            } else {
              return trade;
            }
          })
        )
        setSelectedPlayerLeft(selectedPlayerValue);
        setLeftError('');
        setErrorSnackbar(false);
      }
      
      function handleRightPlayerChange(e, index) {
        const selectedPlayerValue = e.target.value;
        setPlayerTradesRight((prevTrades) =>
          prevTrades.map((trade, i) => {
            if (i === index) {
              return { selectedPlayer: selectedPlayerValue };
            } else {
              return trade;
            }
          })
        )
        setSelectedPlayerRight(selectedPlayerValue);
        setRightError('');
        setErrorSnackbar(false);
      }

      function handleLeftPickChange(e, index) {
        const { name, value } = e.target;
        setPickTradesLeft((prevTrades) =>
          prevTrades.map((trade, i) => {
            if (i === index) {
              return { ...trade, [name]: value };
            } else {
              return trade;
            }
          })
        );
      }
      
      function handleRightPickChange(e, index) {
        const { name, value } = e.target;
        setPickTradesRight((prevTrades) =>
          prevTrades.map((trade, i) => {
            if (i === index) {
              return { ...trade, [name]: value };
            } else {
              return trade;
            }
          })
        );
      }
    
    return (

        
        <React.Fragment>

            {
            user.admin ? 
            <React.Fragment>
            {
                snackbar ? 
                <React.Fragment>
                    <Snackbar
                        duration={3000}
                        onClose={() => setSnackbar(false)}
                        errorSnackbar={errorSnackbar}
                    /> 
                </React.Fragment>
                :
                null
            }
            <TradeDropdown selectedAction={action} onActionChange={handleActionChange}/>
            <div className="trade-centre-container">
            <h4 className="trade-header">Welcome to the Trade Centre</h4>
            <h6 className="trade-header">Here, admins can update the site with recent trades, retirees, and mid-season pickups!</h6>
            
            <div className="trade">
            {
                action === "Trade" 
                ?
                <React.Fragment>

                <div className="trade-left-side">

                    {selectedTeamLeft ? 
                        <React.Fragment>
                            <img height={'120px'} width={'140px'} src={'..' + imgLeft} alt="team logo" />
                        </React.Fragment>
                        :
                        null
                    }

                    <div className="select-team-trade">
                        <label htmlFor="team">Trade Team 1</label>
                        <select name="team" id="team" value={selectedTeamLeft} onChange={handleLeftTradeChange}>
                        <option value="">Select current team</option>
                        {teams.map((team) => (
                            <option key={team.id} value={team.id}>
                            {team.name}
                            </option>
                        ))}
                        </select>
                        
                    </div>
                
                    <div className="flex-button">
                    <button
                        className={`trade-button ${selectedTeamLeft === '' || selectedTeamRight === '' ? 'hide-button' : ''}`}
                        onClick={() => setPlayerTradesLeft((prevTrades) => [
                            ...prevTrades,
                            { selectedPlayer: '' },
                            ])} >Add player
                    </button>
                        <button className={`trade-button ${selectedTeamLeft === '' || selectedTeamRight === '' ? "hide-button" : ""}`} onClick={() => setPickTradesLeft((prevTrades) => [...prevTrades, {}])}>Add pick</button>
                    </div>

                    {
                        selectedTeamLeft && selectedTeamRight ?
                        <React.Fragment>
                        {playerTradesLeft.map((playerTrade, index) => (
                            <div key={index} className="player-trade">
                                <div>
                                    <label htmlFor="player">Select Player:</label>
                                    <select name="player" id="player" value={playerTradesLeft[index].selectedPlayer} onChange={(e) => handleLeftPlayerChange(e, index)}>
                                        <option value="">Select a player</option>
                                        {playersLeft.map((player) => player.active == 1 ? (
                                        <option key={player.id} value={player.id}>
                                            {player.full_name}
                                        </option>
                                        ):null)}
                                    </select>
                                    <button className="confirm-trade" onClick={tradeLeft}>Trade me</button>
                                    {
                                        selectedTeamLeft && leftError ?
                                        <main className='error-message'>
                                            <p>{leftError}</p>
                                        </main>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        ))}
    
                        {pickTradesLeft.map((pickTrade, index) => (
                            <div key ={index} className="pick-trade">
                                <div>
                                    <label htmlFor="pick">Round / Pick:</label>
                                    <select name="round" value={pickTradesLeft[index].round} onChange={(e) => handleLeftPickChange(e, index)}>   
                                        <option value="">Select Round</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                </div>
    
                                <div>
                                    <select name="pick" value={pickTradesLeft[index].pick} onChange={(e) => handleLeftPickChange(e, index)}>
                                        <option value="">Select pick</option>
                                        {numbers.map((num) => (
                                            <option key={num} value={num}>
                                                {(parseInt(pickTradesLeft[index].round) - 1) * 32 + parseInt(num)}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        ))} 

                        <div className="flex-button">
                            <button className={`trade-button ${playerTradesLeft.length == 0 ? "hide-button" : ""}`} onClick={() => setPlayerTradesLeft((prevTrades) => prevTrades.slice(0, prevTrades.length - 1))}>Remove player</button>
                            <button className={`trade-button ${pickTradesLeft.length == 0 ? "hide-button" : ""}`} onClick={() => setPickTradesLeft((prevTrades) => prevTrades.slice(0, prevTrades.length - 1))}>Remove pick</button>
                        </div>   
                        </React.Fragment>: null  
                    }

                </div>

                <div className={`submit-and-content ${selectedTeamLeft && selectedTeamRight ? 'move-arrows' : ''} ${selectedTeamLeft && selectedTeamRight ? '' : 'hide-arrows'}`}>
                    <button onClick={reset} className='trade-submit-button'><b>Reset</b></button>
                    <b style={{ marginTop: '10px' }}>Remember to confirm each player first!</b>
                    <img height={'300px'} width={'300px'} src={img} alt="arrows" /> 
                </div>

                <div className="trade-right-side">

                    {selectedTeamRight ? 
                        <React.Fragment>
                            <img height={'120px'} width={'140px'} src={'..' + imgRight} alt="team logo" />
                        </React.Fragment>
                        :
                        null
                    }

                    <div className="select-team-trade">
                        <label htmlFor="team">Trade Team 2</label>
                        <select name="team" id="team" value={selectedTeamRight} onChange={handleRightTradeChange}>
                        <option value="">Select current team</option>
                        {teams.map((team) => (
                            <option key={team.id} value={team.id}>
                            {team.name}
                            </option>
                        ))}
                        </select>
                    </div>

                    <div className="flex-button">
                        <button className={`trade-button ${ selectedTeamLeft === '' || selectedTeamRight === '' ? 'hide-button' : '' }`}
                            onClick={() => setPlayerTradesRight((prevTrades) => [
                                ...prevTrades,
                                { selectedPlayer: '' },
                                ])}> Add player
                        </button>
                        <button className={`trade-button ${selectedTeamLeft === '' || selectedTeamRight === '' ? "hide-button" : ""}`} onClick={() => setPickTradesRight((prevTrades) => [...prevTrades, {}])}>Add pick</button>
                    </div>

                    {selectedTeamLeft && selectedTeamRight ?
                    <React.Fragment>
                    {playerTradesRight.map((playerTrade, index) => (
                        <div key={index} className="player-trade">
                            <div>
                                <label htmlFor="player">Select Player:</label>
                                <select name="player" id="player" value={playerTradesRight[index].selectedPlayer} onChange={(e) => handleRightPlayerChange(e, index)}>
                                    <option value="">Select a player</option>
                                    {playersRight.map((player) => player.active == 1 ? (
                                    <option key={player.id} value={player.id}>
                                        {player.full_name}
                                    </option>
                                    ):null)}
                                </select>
                                <button className="confirm-trade" onClick={tradeRight}>Trade me</button>
                                {
                                    selectedTeamRight && rightError ?
                                    <main className='error-message'>
                                        <p>{rightError}</p>
                                    </main>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    ))}

                    {pickTradesRight.map((pickTrade, index) => (
                        <div key ={index} className="pick-trade">
                            <div>
                                <label htmlFor="pick">Round / Pick:</label>
                                <select name="round" value={pickTradesRight[index].round} onChange={(e) => handleRightPickChange(e, index)}>   
                                    <option value="">Select Round</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                </select>
                            </div>

                            <div>
                            <select name="pick" value={pickTradesRight[index].pick} onChange={(e) => handleRightPickChange(e, index)}>
                                    <option value="">Select pick</option>
                                    {numbers.map((num) => (
                                            <option key={num} value={num}>
                                                {(parseInt(pickTradesRight[index].round) - 1) * 32 + parseInt(num)}
                                            </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ))}

                    <div className="flex-button">
                        <button className={`trade-button ${playerTradesRight.length == 0 ? "hide-button" : ""}`} onClick={() => setPlayerTradesRight((prevTrades) => prevTrades.slice(0, prevTrades.length - 1))}>Remove player</button>
                        <button className={`trade-button ${pickTradesRight.length == 0 ? "hide-button" : ""}`} onClick={() => setPickTradesRight((prevTrades) => prevTrades.slice(0, prevTrades.length - 1))}>Remove pick</button>
                    </div>
                    </React.Fragment> :null
                    }

                </div>

                </React.Fragment>
                :
                null
            }
            </div>

            <div className="retire retire-dropdown-container">
            {
                action === "Retire" 
                ?
                <React.Fragment>
                    <div className="retire-dropdown-label">
                        <label htmlFor="team">Select Team:</label>
                        <select className="retire-dropdown" name="team" id="team" value={selectedTeam} onChange={handleTeamChange}>
                        <option value="">Select a team</option>
                        {teams.map((team) => (
                            <option key={team.id} value={team.id}>
                            {team.name}
                            </option>
                        ))}
                        </select>
                    </div>

                    <div className="retire-dropdown-label">
                        <label htmlFor="player">Select Player:</label>
                        <select className="retire-dropdown" name="player" id="player" value={selectedPlayer} onChange={handlePlayerChange}>
                            <option value="">Select a player</option>
                            {players.map((player) => player.active == 1 ?(
                            <option key={player.id} value={player.id}>
                                {player.full_name}
                            </option>
                            ):null)}
                        </select>
                    </div>

                    <button onClick={retirePlayer}><b>Retire</b></button>

                    <main className='error-message'>
                        <p>{retireError}</p>
                    </main>

                </React.Fragment>   
                :
                null
            }
            </div>

            <div className="pickup">
            {
                action === "Sign" 
                ?
                <React.Fragment>
    
                <form onSubmit={handleSubmit}>
                    <div className="retire-dropdown-label signing-form">
                        <label htmlFor="name">Full Name:</label>
                        <input className="signing-text" type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" /><br/>
                    </div>
                    
                    <div className="retire-dropdown-label">
                        <label htmlFor="team">Current Team:</label>
                        <select className="retire-dropdown" name="team" id="team" value={id} onChange={pickupTeam}>
                        <option value="">Select a team</option>
                        {teams.map((team) => (
                            <option key={team.id} value={team.id}>
                            {team.name}
                            </option>
                        ))}
                        </select>
                    </div>

                    <div className="retire-dropdown-label">
                        <label htmlFor="position">Position:</label>
                        <select className="retire-dropdown" name="position" id="position" value={position} onChange={(e) => setPosition(e.target.value)}>
                            <option value="">Select a position</option>
                            <option value="Goalie">Goalie</option>
                            <option value="Defenseman">Defenseman</option>
                            <option value="Right Wing">Right Wing</option>
                            <option value="Left Wing">Left Wing</option>
                            <option value="Center">Center</option>
                        </select>
                    </div>

                    <div className="retire-dropdown-label signing-form-jersey">
                        <label htmlFor="jersey">Jersey Number:</label>
                        <input className="signing-text" type="text" value={jersey} onChange={(e) => setJersey(e.target.value)} id="jersey" /><br/>
                    </div>

                    <div className="retire-dropdown-label">
                        <label htmlFor="hand">Hockey Stick:</label>
                        <select className="retire-dropdown" name="hand" id="hand" value={hand} onChange={(e) => setHand(e.target.value)}>
                            <option value="">Select a stick</option>
                            <option value="Right">Right</option>
                            <option value="Left">Left</option>
                        </select>
                    </div>

                    <button type="submit"><b>Sign</b></button>

                    <main className='error-message'>
                        {errors.length > 1 ? <p>{errors.join(', ')}</p> : <p>{errors[0]}</p>}
                    </main>

                </form>

                </React.Fragment>

                :
                null
            }
            </div>
        </div> 
        </React.Fragment>
        : 
        <div className="not-admin">
            <h3>Only admins can edit this page.</h3>
            <p>To find out more about becoming an admin, click <Link to="/admin" className="admin-link">here</Link></p>
        </div>
        }

            

        </React.Fragment>
    )
}