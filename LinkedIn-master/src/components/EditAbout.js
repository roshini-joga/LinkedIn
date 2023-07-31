// EditAbout.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAbout } from '../Store';

const EditAbout = () => {
  const about = useSelector((state) => state.about);
  const dispatch = useDispatch();
  const [aboutText, setAboutText] = useState(about);

  const handleSaveButtonClick = () => {
    dispatch(updateAbout(aboutText));
  };

  return (
    <div className='profile'>
         <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item active">Home</li>
          <li className="navbar-item">Messages</li>
          <li className="navbar-item">Jobs</li>
          <li className="navbar-item">My Network</li>
          <li className="navbar-item">Notifications</li>
        </ul>
      </nav>
      <br></br>
      <h2>Edit About</h2>
      <textarea
        value={aboutText}
        onChange={(e) => setAboutText(e.target.value)}
        rows="4"
        cols="50"
      />
      <br></br>
      <button className="small-button" onClick={handleSaveButtonClick}>Save</button>
    </div>
  );
};

export default EditAbout;
