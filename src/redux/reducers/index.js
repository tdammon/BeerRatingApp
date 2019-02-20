import { combineReducers } from 'redux';
import ScoreReducer from './ScoreReducer';
import userReducer from './userReducer';
import loginMode from './loginModeReducer';
import errors from './errorsReducer';
import setBeerListReducer from './setBeerListReducer';

const rootReducer = combineReducers({
    ScoreReducer,
    userReducer,
    loginMode,
    errors,
    setBeerListReducer,
});

export default rootReducer;