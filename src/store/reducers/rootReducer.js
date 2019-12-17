import authReducer from './authReducer.js';
import memberReducer from './memberReducer.js'
import {combineReducers} from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    member: memberReducer,
    firebase: firebaseReducer
})

export default rootReducer;