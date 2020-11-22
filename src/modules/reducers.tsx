import {  combineReducers} from 'redux';
import auth from './auth/autReducers';

export default ()=> combineReducers({
    auth
});