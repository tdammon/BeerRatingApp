import { combineReducers } from 'redux';
import credentialsReducer from './credentialsReducer';
import ScoreReducer from './ScoreReducer';
import userReducer from './userReducer';
import loginMode from './loginModeReducer';
import errors from './errorsReducer';
import setBeerListReducer from './setBeerListReducer';
import setBreweryListReducer from './setBreweryListReducer';
import setRatingsReducer from './RatingsReducer';
import barReducer from './BarReducer';

const rootReducer = combineReducers({
    barReducer,
    credentialsReducer,
    ScoreReducer,
    userReducer,
    loginMode,
    errors,
    setBeerListReducer,
    setBreweryListReducer,
    setRatingsReducer,
});

export default rootReducer;