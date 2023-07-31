import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import store from './Store';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import the correct components

import EditExperience from './components/EditExperience';
import EditEducation from './components/EditEducation';
import EditSkills from './components/EditSkills';
import EditAbout from './components/EditAbout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/EditAbout" element={<EditAbout />} />
          <Route path="/EditExperience" element={<EditExperience />} />
          <Route path="/EditEducation" element={<EditEducation />} />
          <Route path="/EditSkills" element={<EditSkills />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
