import React, {useState} from "react";

export default function Account({user}){
    
    const [userClicked, setUserClicked] = useState(false);
    const [userUsername, setUserUsername] = useState(`${user.username}`);
    const [bioClicked, setBioClicked] = useState(false);
    const [userBio, setUserBio] = useState(`${user.bio}`);
    const [userToken, setUserToken] = useState(`${user.token}`)
    const userCreated = user.created_at.slice(0, 10);

    console.log("token" + userToken)

    function submitUser(e){
        e.preventDefault();
        setUserClicked(false);
        const updatedUser = {username: userUsername};

        fetch(`/username/${user.username}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedUser), 
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
      
          setUserUsername(updatedUser.username);
        });
    }

    function submitBio(e){
        e.preventDefault();
        setUserBio(false);
        const updatedUser = {bio: userBio};

        fetch(`/bio/${user.username}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedUser), 
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          
          setUserUsername(updatedUser.bio);
        });
    }

    return (
      <React.Fragment>
  
        {userClicked ? (
          <form className="account-form">
            <label htmlFor="username">Username:</label>
            <input
              className="user-form"
              type="text"
              onChange={(e) => setUserUsername(e.target.value)}
              id="user"
              defaultValue={userUsername}
            /><br />
            <button className="submit-button" onClick={submitUser}>Submit</button>
          </form>
        ) : (
          <div className="account-details">
            <h7><b>Username:</b> {user.username}</h7>
            <p onClick={() => setUserClicked(true)}><b>Edit</b></p>
          </div>
        )}
  
        {bioClicked ? (
          <form className="account-form">
            <label htmlFor="bio">Bio:</label>
            <input
              className="bio-form"
              type="text"
              onChange={(e) => setUserBio(e.target.value)}
              id="bio"
              defaultValue={userBio}
            /><br />
            <button className="submit-button" onClick={submitBio}>Submit</button>
          </form>
        ) : (
          <div className="account-details">
            <h7><b>Bio:</b> {user.bio}</h7>
            <p onClick={() => setBioClicked(true)}><b>Edit</b></p>
          </div>
        )}
  
        <div className="account-details-other">
          <h7><b>Account type:</b> {user.token === "" ? "User" : "Admin"}</h7>
          <br/><br/><br/>
          <h7 className="account-date"><b>Account created on:</b> {userCreated}</h7>
        </div>

      </React.Fragment>
    );
}
