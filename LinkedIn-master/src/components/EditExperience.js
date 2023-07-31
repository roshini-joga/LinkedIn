import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExperience, deleteExperience } from '../Store';

const EditExperience = () => {
  const experience = useSelector((state) => state.experience);
  const [newExperience, setNewExperience] = useState('');

  const dispatch = useDispatch();

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    dispatch(addExperience(newExperience));
    setNewExperience('');
  };

  const handleExperienceDelete = (index) => {
    dispatch(deleteExperience(index));
  };

  return (
    <div className="profile">
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
      <h2>Edit Experience</h2>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            {exp}
            <button onClick={() => handleExperienceDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleExperienceSubmit}>
        <input
          type="text"
          placeholder="Add experience"
          value={newExperience}
          onChange={(e) => setNewExperience(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EditExperience;
