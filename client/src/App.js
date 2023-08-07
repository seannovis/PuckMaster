import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import AppRoutes from './helpers/AppRoutes';

function App() {

  const [user, setUser] = useState(null);
  const [bio, setBio] = useState('');
  const [icon, setIcon] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  const [favGoalie, setFavGoalie] = useState(localStorage.getItem("favGoalie") || "");
  const [favDefenseman, setFavDefenseman] = useState(localStorage.getItem("favDefenseman") || "");
  const [favRightWing, setFavRightWing] = useState(localStorage.getItem("favRightWing") || "");
  const [favLeftWing, setFavLeftWing] = useState(localStorage.getItem("favLeftWing") || "");
  const [favCenter, setFavCenter] = useState(localStorage.getItem("favCenter") || "");
  const [rookieGoalie, setRookieGoalie] = useState(localStorage.getItem("rookieGoalie") || "");
  const [rookieDefenseman, setRookieDefenseman] = useState(localStorage.getItem("rookieDefenseman") || "");
  const [rookieRightWing, setRookieRightWing] = useState(localStorage.getItem("rookieRightWing") || "");
  const [rookieLeftWing, setRookieLeftWing] = useState(localStorage.getItem("rookieLeftWing") || "");
  const [rookieCenter, setRookieCenter] = useState(localStorage.getItem("rookieCenter") || "");
  const [randomTeam2, setRandomTeam2] = useState(null);
  const [team2, setTeam2] = useState(false);
  console.log(randomTeam2)

  function onSignUp(){
    setSignedUp(true)
  }

  function hideHomeModal(){
    setSignedUp(false)
  }

  function unfavourite2(){
    setTeam2(false);
    setRandomTeam2(null);
  }

  function setRandomTeamInHome(selectedTeam) {
    setRandomTeam2(selectedTeam);
    setTeam2(true);
  }

  function allStarGoalie(updatedPlayer){
    setFavGoalie(updatedPlayer.full_name);
    console.log(favGoalie)
  }

  function allStarDefenseman(updatedPlayer){
    setFavDefenseman(updatedPlayer.full_name);
    console.log(favDefenseman)
  }

  function allStarRightWing(updatedPlayer){
    setFavRightWing(updatedPlayer.full_name);
    console.log(favRightWing)
  }

  function allStarLeftWing(updatedPlayer){
    setFavLeftWing(updatedPlayer.full_name);
    console.log(favLeftWing)
  }

  function allStarCenter(updatedPlayer){
    setFavCenter(updatedPlayer.full_name);
    console.log(favCenter)
  }

  function allRookieGoalie(updatedDraftee){
    setRookieGoalie(updatedDraftee.full_name);
    console.log(rookieGoalie)
  }

  function allRookieDefenseman(updatedDraftee){
    setRookieDefenseman(updatedDraftee.full_name);
    console.log(rookieDefenseman)
  }

  function allRookieRightWing(updatedDraftee){
    setRookieRightWing(updatedDraftee.full_name);
    console.log(rookieRightWing)
  }

  function allRookieLeftWing(updatedDraftee){
    setRookieLeftWing(updatedDraftee.full_name);
    console.log(rookieLeftWing)
  }

  function allRookieCenter(updatedDraftee){
    setRookieCenter(updatedDraftee.full_name);
    console.log(rookieCenter)
  }

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
        setUser(user)
        setBio(user.bio)
        setIcon(user.icon)
        console.log(user)
        });
      }
    });
  }, []);

   if (!user) {return (<Login onSignUp={onSignUp} onLogin={setUser} defaultBio={bio} defaultIcon={icon} setRandomTeam2={setRandomTeam2}
    setFavGoalie={setFavGoalie} setFavDefenseman={setFavDefenseman} setFavRightWing={setFavRightWing} setFavLeftWing={setFavLeftWing} setFavCenter={setFavCenter}
    setRookieGoalie={setRookieGoalie} setRookieDefenseman={setRookieDefenseman} setRookieRightWing={setRookieRightWing} setRookieLeftWing={setRookieLeftWing} setRookieCenter={setRookieCenter}
    />)
  } else {return (
    <React.Fragment>
      <div className='app'>
        <AppRoutes allStarGoalie={allStarGoalie} allStarDefenseman={allStarDefenseman} allStarRightWing={allStarRightWing} allStarLeftWing={allStarLeftWing} allStarCenter={allStarCenter}
        favGoalie={favGoalie} favDefenseman={favDefenseman} favRightWing={favRightWing} favLeftWing={favLeftWing} favCenter={favCenter}
        allRookieGoalie={allRookieGoalie} allRookieDefenseman={allRookieDefenseman} allRookieRightWing={allRookieRightWing} allRookieLeftWing={allRookieLeftWing} allRookieCenter={allRookieCenter}
        rookieGoalie={rookieGoalie} rookieDefenseman={rookieDefenseman} rookieRightWing={rookieRightWing} rookieLeftWing={rookieLeftWing} rookieCenter={rookieCenter}
        signedUp={signedUp} onSignUp={onSignUp} hideHomeModal={hideHomeModal} user={user} setUser={setUser}
        setRandomTeamInHome={setRandomTeamInHome} randomTeam2={randomTeam2} team2={team2} unfavourite2={unfavourite2}/>
      </div>
    </React.Fragment>
  )}
 
}

export default App;
