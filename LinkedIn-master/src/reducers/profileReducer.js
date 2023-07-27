import { createStore, applyMiddleware } from '@reduxjs/toolkit';
const initialState = {
    name: '',
    email: '',
    skills: [],
    education: [],
    experience: [],
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_PROFILE':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
// export const { updateProfile } = profileReducer.actions;
export default profileReducer;

  