import React, {useState} from "react";
import Signup from "./Signup";
import LoginForm from "./LoginForm";
import Logo from "./Logo";

export default function Login({ user, onLogin, onSignUp, setRandomTeam2,
setFavGoalie, setFavDefenseman, setFavRightWing, setFavLeftWing, setFavCenter,  
setRookieGoalie, setRookieDefenseman, setRookieRightWing, setRookieLeftWing, setRookieCenter}) {
    
    const [showLogin, setShowLogin] = useState(true);
  
    return (
      <React.Fragment>
        <div className="login-container">

        <Logo />
        <div className="form-box">
          {showLogin ? (
            <LoginForm onLogin={onLogin} 
            setFavGoalie={setFavGoalie} setFavDefenseman={setFavDefenseman} setFavRightWing={setFavRightWing} setFavLeftWing={setFavLeftWing} setFavCenter={setFavCenter}
            setRookieGoalie={setRookieGoalie} setRookieDefenseman={setRookieDefenseman} setRookieRightWing={setRookieRightWing} setRookieLeftWing={setRookieLeftWing} setRookieCenter={setRookieCenter} />
          ) : (
            <Signup onSignUp={onSignUp} user={user} onLogin={onLogin} 
            setFavGoalie={setFavGoalie} setFavDefenseman={setFavDefenseman} setFavRightWing={setFavRightWing} setFavLeftWing={setFavLeftWing} setFavCenter={setFavCenter}
            setRookieGoalie={setRookieGoalie} setRookieDefenseman={setRookieDefenseman} setRookieRightWing={setRookieRightWing} setRookieLeftWing={setRookieLeftWing} setRookieCenter={setRookieCenter}/>
          )}
        </div>
  
        <div className="toggle-container">
          {showLogin ? (
            <p className="login-text">
              Don't have an account?      
              <button
                className="toggle-btn"
                onClick={() => setShowLogin(false)}
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p className="login-text">
              Already have an account?
              <button
                className="toggle-btn"
                onClick={() => setShowLogin(true)}
              >
                Log In
              </button>
            </p>
          )}
        </div>

        </div>
      </React.Fragment>
    );
  }
  