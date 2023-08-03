import React, {useState} from "react";
import Signup from "./Signup";
import LoginForm from "./LoginForm";
import Logo from "./Logo";

export default function Login({ user, onLogin, onSignUp }) {
    const [showLogin, setShowLogin] = useState(true);
  
    return (
      <React.Fragment>
        <div className="login-container">

        <Logo />
        <div className="form-box">
          {showLogin ? (
            <LoginForm onLogin={onLogin} />
          ) : (
            <Signup onSignUp={onSignUp} user={user} onLogin={onLogin} />
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
  