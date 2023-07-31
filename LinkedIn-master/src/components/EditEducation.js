import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEducation, deleteEducation } from '../Store';

const EditEducation = () => {
  const education = useSelector((state) => state.education);
  const [newEducation, setNewEducation] = useState('');

  const dispatch = useDispatch();

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    dispatch(addEducation(newEducation));
    setNewEducation('');
  };

  const handleEducationDelete = (index) => {
    dispatch(deleteEducation(index));
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
      <h2>Edit Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu}
            <button onClick={() => handleEducationDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleEducationSubmit}>
        <input
          type="text"
          placeholder="Add education"
          value={newEducation}
          onChange={(e) => setNewEducation(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EditEducation;
