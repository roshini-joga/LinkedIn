import { combineReducers } from 'redux';
import profileReducer from './profileReducer';

const RootReducer = combineReducers({
  profile: profileReducer,
});

export default RootReducer;
