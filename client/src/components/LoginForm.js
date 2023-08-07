import React, {useState} from "react";
import show from '../helpers/show.png';
import hide from '../helpers/hide.png';

export default function LoginForm({onLogin,
setFavGoalie, setFavDefenseman, setFavRightWing, setFavLeftWing, setFavCenter,  
setRookieGoalie, setRookieDefenseman, setRookieRightWing, setRookieLeftWing, setRookieCenter}) {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [showPassword, setShowPassword] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setUsername('');
        setPassword('');
        
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            } else {
              r.json().then((err) => {
                if (!errors.includes(err.error)) {
                  setErrors([...errors, err.error])
                } else {
                  setErrors([...errors])
                }
              })
            }
          })
          setFavGoalie('');
          setFavDefenseman('');
          setFavRightWing('');
          setFavLeftWing('');
          setFavCenter('');
          setRookieGoalie('');
          setRookieDefenseman('');
          setRookieRightWing('');
          setRookieLeftWing('');
          setRookieCenter('');
        }
         
        
    return (
        <React.Fragment>
              <form onSubmit={handleSubmit}>
                  <label htmlFor="username">Username</label>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" /><br/>

                  <label htmlFor="password">Password</label>
                  <div className="password-container">
                    <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} id="password" /><br/>
                    <img className="password-eye" src={showPassword ? hide : show} alt={showPassword ? 'hide' : 'show'} onClick={() => setShowPassword(!showPassword)} />
                  </div>

                  <button type="submit">Submit</button>
                  

                  <main className="error-message">
                      {errors.map((err) => (
                          <p>{err}</p>
                      ))}
                  </main>
              </form>
        </React.Fragment>
    );
}