import React, { useState } from 'react';
import logo from '../linkedin-logo.png';
import './SignIn.css';
import Profile from './Profile.js';
  import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate=useNavigate();
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log('Email:', email);
  //   console.log('Password:', password);

  //   setEmail('');
  //   setPassword('');
  //   setLoggedIn(true);
  // };
  const handleClick=()=>{
    // setLoggedIn(true);
    navigate('/Profile');
  }

  return (
        
     
    <div className="App">
      <header>
      <img className="logosize" src={logo} alt="LinkedIn Logo" align='left'/>
      </header>
     
      <main>
          <div className="login-signup-container">
            <h2>LinkedIn</h2>
            <form className="login-form">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleClick}>Log In</button>
            </form>
            <p className="or-divider">OR</p>
            <button className="signup-button">Sign Up</button>
          </div>
        
      </main>
    </div>
  );
}

export default SignIn;


