import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import AllStarBlank from "./AllStarBlank";
import AllRookieBlank from "./AllRookieBlank";
import nhlImg from "../helpers/nhl.png";
import draft from "../helpers/draft.png";
import home from "../helpers/home.png";
import p from "../helpers/player.png";
import retire from "../helpers/retire.png";
import sign from "../helpers/sign.png";
import trade from "../helpers/trade.png";
import t from "../helpers/team.png";

export default function Home({user, signedUp, hideHomeModal, 
favGoalie, favDefenseman, favRightWing, favLeftWing, favCenter,
rookieGoalie, rookieDefenseman, rookieRightWing, rookieLeftWing, rookieCenter,
team2, randomTeam2, unfavourite2, setRandomTeamInHome}) {

    const [bio, setBio] = useState(false);
    const [userBio, setUserBio] = useState(`${user.bio}`);
    const [teams, setTeams] = useState([]);
    const [team, setTeam] = useState(false);
    const [randomTeam, setRandomTeam] = useState(null);
    const [activeModal, setActiveModal] = useState(0);

    const modals = [
        {
          title: 'User Dashboard',
          content: 'Here you can see your All-Star Team, All-Rookie Team, Favourite Team and Bio',
        },
        {
          title: 'Team',
          content: 'View all the teams, filter by division, and select your favourite team. Be sure to check out each teams players, draftees and stats!',
        },
        {
          title: 'Players',
          content: 'View all NHL players, check out each player in depth in the Profile, and select your All-Star team. Only 1 player from each position can be selected!',
        },
        {
          title: 'Draftees',
          content: "View the Draft Class of 2023, check out each draftees' Profile, and select your All-Rookie team. Only 1 player from each position can be selected!",
        },
        {
          title: 'Trade',
          content: 'Complete trades between teams. Trade multiple players and multiple picks at the same time! (Admins only)',
        },
        {
          title: 'Retire and Sign',
          content: 'Retiring players and new signings can be updated here! (Admins only)',
        }
      ];

    function closeModal() {
      hideHomeModal();
      setActiveModal(0); 
    }

    function nextModal() {
        setActiveModal((prevIndex) => prevIndex === modals.length - 1 ? prevIndex : prevIndex + 1);
    }

    function prevModal() {
        setActiveModal((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
    }

    useEffect(() => {
      fetchTeams();
      const storedRandomTeam2 = localStorage.getItem("randomTeam2");
      if (storedRandomTeam2) {
        setRandomTeamInHome(JSON.parse(storedRandomTeam2));
      }
    }, []);
  
    useEffect(() => {
      if (randomTeam2) {
        localStorage.setItem("randomTeam2", JSON.stringify(randomTeam2));
      } else {
        localStorage.removeItem("randomTeam2");
      }
    }, [randomTeam2]);
    
    function fetchTeams() {
        fetch("/teams")
            .then((r) => r.json())
            .then((data) => {
                setTeams(data);
            });
    }

    function randomise(){
        fetchTeams();
        const randomIndex = Math.floor(Math.random() * teams.length);
        const randomTeam = teams[randomIndex];
        setRandomTeam(randomTeam);
        setTeam(true);
    }

    function unfavourite(){
      setTeam(false);
      setRandomTeam(null);
    }

    function onUnfavourite(){
      unfavourite2(team2);
      setRandomTeam(null);
      setTeam(false);
    }

    useEffect(() => {
      const storedRandomTeam = localStorage.getItem("randomTeam");
      if (storedRandomTeam) {
        setRandomTeam(JSON.parse(storedRandomTeam));
        setTeam(true);
      }
    }, []);
  
    useEffect(() => {
      if (randomTeam) {
        localStorage.setItem("randomTeam", JSON.stringify(randomTeam));
      } else {
        localStorage.removeItem("randomTeam");
      }
    }, [randomTeam]);

    function bioForm(){
        setBio(true);
    }

    function submitBio(e){
        e.preventDefault();
        const updatedBioData = { bio: userBio };
      
        fetch(`/bio/${user.username}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedBioData), 
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
      
          setUserBio(updatedBioData.bio);
          setBio(false);
        });
    }

    return (

    <React.Fragment> 

    {
        signedUp
        ?
        <div  className="home-modal-overlay">
          <div className="home-modal-dialog" style={{ backgroundColor: '#e0f4f9' }}>
            <div className="home-modal-content" style={{ backgroundColor: '#e0f4f9' }}>
              <div className="home-modal-header" style={{ backgroundColor: '#e0f4f9' }}>
                <span className="closeModal" onClick={closeModal}>
                  x
                </span>
              </div>
              <div className="home-modal-body">
                <h4>{modals[activeModal].title}</h4>
                <p>{modals[activeModal].content}</p>
                {
                  activeModal === 0 ?
                  <img width={'100%'} height={'500px'} src={home} alt="image" /> : null
                }
                {
                  activeModal === 1 ?
                  <img width={'100%'} height={'500px'} src={t} alt="image" /> : null
                }
                {
                  activeModal === 2 ?
                  <img width={'100%'} height={'500px'} src={p} alt="image" /> : null
                }
                {
                  activeModal === 3 ?
                  <img width={'100%'} height={'500px'} src={draft} alt="image" /> : null
                }
                {
                  activeModal === 4 ?
                  <img width={'100%'} height={'500px'} src={trade} alt="image" /> : null
                }
                {
                  activeModal === 5 ?
                  <React.Fragment>
                  <img width={'300px'} height={'500px'} src={retire} alt="image" /> 
                  <img width={'250px'} height={'500px'} src={sign} alt="image" />
                  </React.Fragment> : null
                }
              </div>

              <div className="home-modal-footer">

                {activeModal > 0 ? 
                <button className="modal-button" onClick={prevModal}>Previous</button>
                :
                null
                }
                
                {activeModal < modals.length - 1 ?
                (<button className={`modal-button ${activeModal === 0 ? "next-button" : ""}`} onClick={nextModal}>Next</button>)
                :
                (<button className="modal-button" onClick={closeModal}>Finish</button>)
                }

              </div>
            </div>
          </div>
        </div>
        :
        null
    }

    <div id="home-content">

        <div className="bio">

        {
            bio
            ?
            <React.Fragment>
                <h3>Bio</h3>
                <form>
                    <label htmlFor="bio"></label>
                    <input className="bio-form" type="text" onChange={(e) => setUserBio(e.target.value)} id="bio" defaultValue={userBio}/><br/>
                    <button onClick={submitBio}>Submit</button>
                </form>
            </React.Fragment>
            :
            <React.Fragment>
                <h3>Bio</h3>
                <p>{userBio}</p>
                <button onClick={bioForm}>Edit</button>
            </React.Fragment>
        }

        </div>

        <div className="teams">

            <h3>Favourite Team</h3>

            {
                team || team2
                ?
                <React.Fragment>
                {
                  randomTeam2 ?
                  <React.Fragment>
                  <p className="fav-team">{randomTeam2.name}</p>
                  <div className="team-image-container">
                      <img src={'..' + randomTeam2.image_url} alt="team logo" />
                      <button onClick={onUnfavourite}>Unfavourite</button>
                  </div>
                  </React.Fragment>
                  :
                  <React.Fragment>
                  <p className="fav-team">{randomTeam.name}</p>
                  <div className="team-image-container">
                      <img src={'..' + randomTeam.image_url} alt="team logo" />
                      <button onClick={unfavourite}>Unfavourite</button>
                  </div>
                  </React.Fragment>
                }
                </React.Fragment>
                :
                <React.Fragment>
                <img className="nhl-img" src={nhlImg} alt="NHl logo"/>
                <p>Select your favourite team <Link to ='/teams' className="home-link">here</Link></p> 
                <h5>Or let us randomly select one</h5><button onClick={randomise}>Randomise!</button>
                </React.Fragment>
            }
        
        </div>

        <div className="players">
            <h3>All-Star Team</h3>
            <React.Fragment>
                <p>Create your All-NHL team <Link to ='/players' className="home-link">here</Link></p> 
                <AllStarBlank favGoalie={favGoalie} favDefenseman={favDefenseman} favRightWing={favRightWing} favLeftWing={favLeftWing} favCenter={favCenter}/>
            </React.Fragment >
        </div>

        <div className="draftees">
            <h3>All-Rookie Team</h3>
            <React.Fragment>
                <p>Create your All-Rookie team <Link to ='/draftees' className="home-link">here</Link></p>   
                <AllRookieBlank rookieGoalie={rookieGoalie} rookieDefenseman={rookieDefenseman} rookieRightWing={rookieRightWing} rookieLeftWing={rookieLeftWing} rookieCenter={rookieCenter}/>
            </React.Fragment>      
        </div> 

    </div>

    </React.Fragment>  
    )
}