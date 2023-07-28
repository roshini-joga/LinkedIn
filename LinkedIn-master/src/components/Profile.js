import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExperience, deleteExperience, addEducation, deleteEducation, addSkill, deleteSkill } from '../Store';
import coverPhoto from './coverPhoto.png';
import image from './image.jpeg';
import './Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills);
  const experience = useSelector((state) => state.experience);
  const education = useSelector((state) => state.education);

  const [newExperience, setNewExperience] = useState('');
  const [newEducation, setNewEducation] = useState('');
  const [newSkills, setNewSkills] = useState('');

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    dispatch(addExperience(newExperience));
    setNewExperience('');
  };

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    dispatch(addEducation(newEducation));
    setNewEducation('');
  };

  const handleSkillsSubmit = (e) => {
    e.preventDefault();
    dispatch(addSkill(newSkills));
    setNewSkills('');
  };

  const handleExperienceDelete = (index) => {
    dispatch(deleteExperience(index));
  };

  const handleEducationDelete = (index) => {
    dispatch(deleteEducation(index));
  };

  const handleSkillsDelete = (index) => {
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
      <div className="profile-header">
        <img src={image} alt="Profile Picture" className="profile-picture" />
        <h2 className="profile-name">Roshini Joga</h2>
        <p className="profile-title">Associate Software Engineer at Techsophy</p>
      </div>
      <div className="profile-content">
        <div className="profile-about">
          <h3>About</h3>
          <p>I am an enthusiastic developer looking for opportunities.</p>
        </div>
        <div className="profile-experience">
          <h3>Experience</h3>
          <ul>
            {experience.map((exp, index) => (
              <li key={index}>
                {exp}
                <button className="add-button" onClick={() => handleExperienceDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <form onSubmit={handleExperienceSubmit}>
            <input
              className="addexp"
              type="text"
              placeholder="Add experience"
              value={newExperience}
              onChange={(e) => setNewExperience(e.target.value)}
            />
            <br></br>
            <br></br>
            <button className="small-button" type="submit" align="right">Add</button>
          </form>
        </div>
        <div className="profile-education">
          <h3>Education</h3>
          <ul>
            {education.map((edu, index) => (
              <li key={index}>
                {edu}
                <button onClick={() => handleEducationDelete(index)}>Delete</button>
                <br/>
              </li>
            ))}
          </ul>
          <br></br>
          <form onSubmit={handleEducationSubmit}>
            <input
              className="addexp"
              type="text"
              placeholder="Add education"
              value={newEducation}
              onChange={(e) => setNewEducation(e.target.value)}
            />
            <br></br>
            <br></br>
            <button className="small-button" type="submit">Add</button>
          </form>
        </div>
        <div className="profile-experience">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                {skill}
                <button className="add-button" onClick={() => handleSkillsDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSkillsSubmit}>
            <input
              className="addexp"
              type="text"
              placeholder="Add skills"
              value={newSkills}
              onChange={(e) => setNewSkills(e.target.value)}
            />
            <br></br>
            <br></br>
            <button className="small-button" type="submit" align="right">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
