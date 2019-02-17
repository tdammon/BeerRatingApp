import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "UPDATE_SCORE" actions
// gets all of a users flashcards
function* submitScore(action) {
  try {

    yield call(axios.post, '/submitScore', action.payload);
    
  } catch (error) {
    console.log('Error Submitting Score:', error);
    
  }
}

function* ScoreSaga() {
  yield takeLatest('SUBMIT_SCORE', submitScore);
  
}

export default ScoreSaga;