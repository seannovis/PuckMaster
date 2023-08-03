import React, {useState} from "react";
import { Link } from "react-router-dom";
import img from "../helpers/PuckMaster.png"

export default function Nav({ user, setUser, onSignUp }) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE"
    })
      .then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
  }

  function handleDropdownToggle() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function handleTourToggle() {
    setIsDropdownOpen(!isDropdownOpen);
    onSignUp();
  }

  return (
    <React.Fragment>
      <div>
        <nav>
          <div className="left-side">
            <span>
              <Link to="/"><img src={img} alt="logo" className="nav-logo" /></Link>
            </span> 
            <span className="nav-effect">
              <Link to="/teams">Teams</Link>
            </span> 
            <span className="nav-effect">
              <Link to="/players">Players</Link>
            </span>
            <span className="nav-effect">
              <Link to="/draftees">2023 Draft</Link>
            </span>
            <span className="nav-effect">
              <Link to="/trade-centre">Trade</Link>
            </span>
          </div>

          <div className="right-side">
            <div className="dropdown user-container">
              
              <button className="btn btn-secondary dropdown-toggle user-button" type="button" onClick={handleDropdownToggle}>
              <img src={user.icon} alt="User Icon" />
                {user.username}
              </button>
              <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                <Link className="dropdown-item user-button" to="/" onClick={handleDropdownToggle}>
                  Home
                </Link>
                <Link className="dropdown-item user-button" to="/" onClick={(handleTourToggle)} >
                  Virtual Tour
                </Link>
                <Link className="dropdown-item user-button" to="/account" onClick={handleDropdownToggle}>
                  Account Details
                </Link>
                <Link className="dropdown-item user-button" to="/admin" onClick={handleDropdownToggle}>
                  Admin Token
                </Link>
                <div className="dropdown-divider"></div>
                  <button className="btn btn-secondary user-button" onClick={handleLogout}>
                    Logout
                  </button>
              </div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
