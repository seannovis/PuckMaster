import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Teams from "../components/Teams";
import Players from "../components/Players";
import Draftees from "../components/Draftees";
import TradeCentre from "../components/TradeCentre";
import NoPageFound from "../components/NoPageFound";
import Nav from "../components/Nav"; 
import Account from "../components/Account";
import Admin from "../components/Admin";
import { Outlet } from "react-router-dom";

export default function AppRoutes({ user, setUser, signedUp, onSignUp, hideHomeModal, 
  allStarGoalie, allStarDefenseman, allStarRightWing, allStarLeftWing, allStarCenter, 
  favGoalie, favDefenseman, favRightWing, favLeftWing, favCenter,
  allRookieGoalie, allRookieDefenseman, allRookieRightWing, allRookieLeftWing, allRookieCenter,
  rookieGoalie, rookieDefenseman, rookieRightWing, rookieLeftWing, rookieCenter, setRandomTeamInHome, team2, randomTeam2, unfavourite2 }) {
  return (
    <div>
      <Router>
        <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Nav onSignUp={onSignUp} user={user} setUser={setUser} /> 
              <Outlet /> 
            </React.Fragment>
          }
        >
          <Route path="/" element={<Home favGoalie={favGoalie} favDefenseman={favDefenseman} favRightWing={favRightWing} favLeftWing={favLeftWing} favCenter={favCenter}
          rookieGoalie={rookieGoalie} rookieDefenseman={rookieDefenseman} rookieRightWing={rookieRightWing} rookieLeftWing={rookieLeftWing} rookieCenter={rookieCenter}
          hideHomeModal={hideHomeModal} signedUp={signedUp} user={user} team2={team2} randomTeam2={randomTeam2} unfavourite2={unfavourite2} setRandomTeamInHome={setRandomTeamInHome}/>} />
          <Route path="/teams" element={<Teams setRandomTeamInHome={setRandomTeamInHome}/>} />
          <Route path="/players" element={<Players favGoalie={favGoalie} favDefenseman={favDefenseman} favRightWing={favRightWing} favLeftWing={favLeftWing} favCenter={favCenter}
          allStarGoalie={allStarGoalie} allStarDefenseman={allStarDefenseman} allStarRightWing={allStarRightWing} allStarLeftWing={allStarLeftWing} allStarCenter={allStarCenter}/>} />
          <Route path="/draftees" element={<Draftees allRookieGoalie={allRookieGoalie} allRookieDefenseman={allRookieDefenseman} allRookieRightWing={allRookieRightWing} allRookieLeftWing={allRookieLeftWing} allRookieCenter={allRookieCenter}
          rookieGoalie={rookieGoalie} rookieDefenseman={rookieDefenseman} rookieRightWing={rookieRightWing} rookieLeftWing={rookieLeftWing} rookieCenter={rookieCenter}/>} />
          <Route path="/trade-centre" element={<TradeCentre />} />
          <Route path="/*" element={<NoPageFound />} />
          <Route path="/account" element={<Account user={user}/>} />
          <Route path="/admin" element={<Admin user={user}/>} />
        </Route>
        </Routes>
      </Router>
    </div>
  );
}
