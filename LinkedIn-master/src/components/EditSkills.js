import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSkill, deleteSkill } from '../Store';

const EditSkills = () => {
  const skills = useSelector((state) => state.skills);
  const [newSkill, setNewSkill] = useState('');

  const dispatch = useDispatch();

  const handleSkillSubmit = (e) => {
    e.preventDefault();
    dispatch(addSkill(newSkill));
    setNewSkill('');
  };

  const handleSkillDelete = (index) => {
    dispatch(deleteSkill(index));
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
      <h2>Edit Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => handleSkillDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSkillSubmit}>
        <input
          type="text"
          placeholder="Add skills"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EditSkills;
