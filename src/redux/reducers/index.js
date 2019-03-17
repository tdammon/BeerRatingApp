import { combineReducers } from 'redux';
import credentialsReducer from './credentialsReducer';
import ScoreReducer from './ScoreReducer';
import userReducer from './userReducer';
import loginMode from './loginModeReducer';
import errors from './errorsReducer';
import setBeerListReducer from './setBeerListReducer';
import setRatingsReducer from './RatingsReducer';

const rootReducer = combineReducers({
    credentialsReducer,
    ScoreReducer,
    userReducer,
    loginMode,
    errors,
    setBeerListReducer,
    setRatingsReducer
});

export default rootReducer;