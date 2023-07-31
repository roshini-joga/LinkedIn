import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import coverPhoto from './coverPhoto.png';
import image from './image.jpeg';
import './Profile.css';

const Profile = () => {
  const skills = useSelector((state) => state.skills);
  const experience = useSelector((state) => state.experience);
  const education = useSelector((state) => state.education);
  const about = useSelector((state) => state.about);
  const dispatch = useDispatch();

  return (
    <div className="profile">
      <nav className="navbar">
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item active">Home</li>
          <li className="navbar-item">Messages</li>
          <li className="navbar-item">Jobs</li>
          <li className="navbar-item">My Network</li>
          <li className="navbar-item">Notifications</li>
        </ul>
      </nav>
      </nav>
      <br></br>
      <div className="profile-header">
        <img src={image} alt="Profile Picture" className="profile-picture" />
        <h2 className="profile-name">Roshini Joga</h2>
        <p className="profile-title">Associate Software Engineer at Techsophy</p>
      </div>
      <div className="profile-content">
        <div className="profile-about">
          <h2>About</h2>
          <p>{about}</p>
          {/* Link to Edit About page */}
          <Link to="/edit/about">Edit</Link>
        </div>
        <div className="profile-experience">
          <h3>Experience</h3>
          <ul>
            {experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
          {/* Link to Edit Experience page */}
          <Link to="/EditExperience">Edit</Link>
        </div>
        <div className="profile-education">
          <h3>Education</h3>
          <ul>
            {education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
          {/* Link to Edit Education page */}
          <Link to="/EditEducation">Edit</Link>
        </div>
        <div className="profile-skills">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          {/* Link to Edit Skills page */}
          <Link to="/EditSkills">Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
