import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import ConfigureStore from './store/ConfigureStore';
// import New from './components/New';
import { BrowserRouter, Router, Route, Routes,Switch } from 'react-router-dom';
// import { createBrowserHistory } from 'history';

const store = ConfigureStore(); 

function App() {
  //const history = createBrowserHistory();

  return (
    <Provider store={store}>
    <BrowserRouter>
    
      <Routes>
        <Route  path="/" element={<SignIn/>} />
        <Route  path="/Profile" element={<Profile/>} />
     
     </Routes>
    
    </BrowserRouter>
    </Provider>
  );
}

export default App;
