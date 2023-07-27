import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/RootReducer';

const ConfigureStore = () => {
  return createStore(RootReducer, applyMiddleware(thunk));
};

export default ConfigureStore;
