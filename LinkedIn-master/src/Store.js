import { createStore } from 'redux';

const initialState = {
  about:['I am enthusiastic individual striving for oppurtunities'],
  skills: ['Python', 'React'],
  experience: ['Techsophy - Software Engineer', 'ABC - Frontend Developer'],
  education: ['Osmania University - Computer Science', 'High School - MPC Stream'],
};

export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';
export const DELETE_EXPERIENCE = 'DELETE_EXPERIENCE';
export const ADD_EDUCATION = 'ADD_EDUCATION';
export const DELETE_EDUCATION = 'DELETE_EDUCATION';
export const ADD_SKILL = 'ADD_SKILL';
export const DELETE_SKILL = 'DELETE_SKILL';
export const ADD_ABOUT = 'ADD_ABOUT';
export const UPDATE_ABOUT = 'UPDATE_ABOUT';

export const addExperience = (experience) => ({
  type: ADD_EXPERIENCE,
  payload: experience,
});

export const deleteExperience = (index) => ({
  type: DELETE_EXPERIENCE,
  payload: index,
});

export const addEducation = (education) => ({
  type: ADD_EDUCATION,
  payload: education,
});

export const deleteEducation = (index) => ({
  type: DELETE_EDUCATION,
  payload: index,
});

export const addSkill = (skill) => ({
  type: ADD_SKILL,
  payload: skill,
});

export const deleteSkill = (index) => ({
  type: DELETE_SKILL,
  payload: index,
});

export const addAbout = (about) => ({
  type: ADD_ABOUT,
  payload: about,
});

export const updateAbout = (about) => ({
  type: UPDATE_ABOUT,
  payload: about,
});


// Reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPERIENCE:
      return {
        ...state,
        experience: [...state.experience, action.payload],
      };
    case DELETE_EXPERIENCE:
      return {
        ...state,
        experience: state.experience.filter((exp, index) => index !== action.payload),
      };
    case ADD_EDUCATION:
      return {
        ...state,
        education: [...state.education, action.payload],
      };
    case DELETE_EDUCATION:
      return {
        ...state,
        education: state.education.filter((edu, index) => index !== action.payload),
      };
    case ADD_SKILL:
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };
    case DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter((skill, index) => index !== action.payload),
      };
      case ADD_ABOUT:
      return {
        ...state,
        about: action.payload,
      };
    case UPDATE_ABOUT:
      return {
        ...state,
        about: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(profileReducer);

export default store;
