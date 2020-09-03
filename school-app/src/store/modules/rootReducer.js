import { combineReducers } from 'redux';
import auth from './auth/reducer';
import loading from './loading/reducer';

export default combineReducers({ auth, loading });
