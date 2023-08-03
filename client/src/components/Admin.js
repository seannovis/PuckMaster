import React, {useState} from "react";

export default function Admin({user}){

    const [token, setToken] = useState(false);
    const [userToken, setUserToken] = useState('');
    const [errors, setErrors] = useState([]);
    const [correct, setCorrect] = useState('');

    function submitToken(e){
        e.preventDefault();
        const updatedToken = { token: userToken };
      
        fetch(`/token/${user.username}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedToken), 
        })
        .then((res) => {
            res.json()
            .then(() => {
                if (res.ok) {
                    setUserToken('');
                    setToken(false);
                    setCorrect('Success! You are now an admin and can edit PuckMaster.')
                } else {
                    res.json().then((err) => {
                      if (err.error) {
                      setErrors(err.error)
                      console.log(errors)
                    }  
                })
                }
            })
        })
    }

    return (
        <React.Fragment>
          <h4 className="admin-title">Admin tokens are given to users with expert NHL knowledge to ensure our site remains updated.</h4>
          <h6 className="admin-subtitle">Please email nhl@puckmaster.com to request an admin token.</h6>
          {
            token
              ?
              <React.Fragment>
                <h3 className="enjoy-message">Enjoy!</h3>
              </React.Fragment>
              :
              <React.Fragment>
                <form className="admin-form">
                  <label htmlFor="token">Enter your token:</label>
                  <input className="bio-form" type="text" onChange={(e) => setUserToken(e.target.value)} id="token" /><br />
                  <button className="submit-button" onClick={submitToken}>Submit</button>
                  <p className="admin-message">{correct}</p>
                </form>
    
                <main className='error-message'>
                  <p className="error">{errors}</p>
                </main>
    
              </React.Fragment>
          }
        </React.Fragment>
      );
    }