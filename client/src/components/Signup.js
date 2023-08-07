import React, {useState} from 'react';
import show from '../helpers/show.png';
import hide from '../helpers/hide.png';

export default function Signup({ defaultBio, defaultIcon, onLogin, onSignUp,
setFavGoalie, setFavDefenseman, setFavRightWing, setFavLeftWing, setFavCenter,  
setRookieGoalie, setRookieDefenseman, setRookieRightWing, setRookieLeftWing, setRookieCenter }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [token, setToken] = useState('');
    const [bio, setBio] = useState(defaultBio);
    const [icon, setIcon] = useState(defaultIcon);
    const [errors, setErrors] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    function toggleSignedUp(){
      onSignUp();
    }

    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
  
      setUsername('');
      setPassword('');
      setPasswordConfirmation('');
      setToken('');
      setBio('');
      setIcon('');
  
      fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          password_confirmation: passwordConfirmation,
          token: token,
          bio: bio,
          icon: icon,
        }),
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              onLogin(user);
              toggleSignedUp(); 
            });
          } else {
            r.json().then((err) => {
              if (!errors.includes(err.error)) {
                setErrors([...errors, err.error]);
              } else {
                setErrors([...errors]);
              }
            });
          }
        });
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
                <label htmlFor="username">Username *</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" /><br/>

                <label htmlFor="password">Password *</label>
                <div className='password-container'>
                    <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} id="password" /><br/>
                    <img className="password-eye" src={showPassword ? hide : show} alt={showPassword ? 'hide' : 'show'} onClick={() => setShowPassword(!showPassword)} />
                </div>

                <label htmlFor="passwordConfirmation">Confirm password *</label>
                <div className='password-container'>
                    <input type={showPasswordConfirmation ? "text" : "password"} value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} id="passwordConfirmation" /><br/>
                    <img className="password-eye" src={showPasswordConfirmation ? hide : show} alt={showPasswordConfirmation ? 'hide' : 'show'} onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)} />
                </div>

                <label htmlFor="bio">Tell us a bit about yourself</label>
                <input type="text" value={bio} defaultValue={bio} onChange={(e) => setBio(e.target.value)} id="bio" /><br/>

                <label htmlFor="token">Admin token (admins only)</label>
                <input type="text" value={token} onChange={(e) => setToken(e.target.value)} id="token" /><br/>

                <button type="submit">Submit</button>

                <p className='login-text'>*Required</p>

                <main className='error-message'>
                    {errors.map((err) => (
                        <p>{err}</p>
                    ))}
                </main>

            </form>
        </React.Fragment>
    );

}