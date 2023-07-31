import React, { useState } from 'react';
import logo from '../linkedin-logo.png';
import './SignIn.css';
import Profile from './Profile.js';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Hardcoded email and password for demonstration purposes
  const hardcodedEmail = 'user@example.com';
  const hardcodedPassword = 'password';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === hardcodedEmail && password === hardcodedPassword) {
      setLoggedIn(true);
      navigate('/Profile');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="App">
      <header>
        <img className="logosize" src={logo} alt="LinkedIn Logo" align="left" />
      </header>

      <main>
        <div className="login-signup-container">
          <h2>LinkedIn</h2>
          <form className="login-form" onSubmit={handleSubmit}>
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
            <button type="submit">Log In</button>
          </form>
          <p className="or-divider">OR</p>
          <button className="signup-button">Sign Up</button>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
