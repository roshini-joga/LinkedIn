import React from 'react';
import image from './image.jpeg';
import './Profile.css';
import { connect } from 'react-redux';
import { updateProfile } from '../actions/ProfileActions';

const Profile = ({ profile, updateProfile }) => {
  const handleExperienceDelete = (index) => {
    const updatedExperience = [...profile.experience];
    updatedExperience.splice(index, 1);
    updateProfile({ ...profile, experience: updatedExperience });
  };

  const handleEducationDelete = (index) => {
    const updatedEducation = [...profile.education];
    updatedEducation.splice(index, 1);
    updateProfile({ ...profile, education: updatedEducation });
  };

  const handleskillsDelete = (index) => {
    const updatedSkills = [...profile.skills];
    updatedSkills.splice(index, 1);
    updateProfile({ ...profile, skills: updatedSkills });
  };

  return (
    <div className="profile">
      {/* ... */}
      <div className="profile-experience">
        <h3>Experience</h3>
        <ul>
          {profile.experience.map((exp, index) => (
            <li key={index}>
              {exp}
              <button className='add-button' onClick={() => handleExperienceDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleExperienceSubmit}>
          <input
            className="addexp"
            type="text"
            placeholder="Add experience"
            // value={newExperience}
            // onChange={(e) => setNewExperience(e.target.value)}
          />
          <br></br>
          <br></br>
          <button className='small-button' type="submit" align='right'>Add</button>
        </form>
      </div>
      {/* ... */}
      <div className="profile-education">
        {/* ... */}
      </div>
      {/* ... */}
      <div className="profile-experience">
        <h3>Skills</h3>
        <ul>
          {profile.skills.map((skill, index) => (
            <li key={index}>
              {skill}
              <button className='add-button' onClick={() => handleskillsDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleskillsSubmit}>
          <input
            className="addexp"
            type="text"
            placeholder="Add skills"
            // value={newSkills}
            // onChange={(e) => setNewSkills(e.target.value)}
          />
          <br></br>
          <br></br>
          <button className='small-button' type="submit" align='right'>Add</button>
        </form>
      </div>
      {/* ... */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { updateProfile })(Profile);
