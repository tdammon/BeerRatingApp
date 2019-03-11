import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "UPDATE_SCORE" actions
// gets all of a users flashcards
function* submitScore(action) {
  try {

    yield call(axios.post, '/submitScore', action.payload);
    yield call(axios.post, '/submitScore/picture', action.payload)
    yield put({type: 'ADD_BEER', payload: action.payload})
  } catch (error) {
    console.log('Error Submitting Score:', error);
    
  }
}

function* addBeer(action) {
  try {
    yield call(axios.post, '/submitScore/addBeer', action.payload);

  } catch (error) {
    console.log('Error Adding a Beer', error);
  }

}

function* beerLookup(action) {
  try {
    const response = yield call(axios.get, '/submitScore', {params: {name: action.payload}})
    yield put({type: 'SET_BEER_LIST', payload: response.data})
  } catch(error){
    console.log('Error Finding a Beer', error)
  }
}

function* ScoreSaga() {
  yield takeLatest('SUBMIT_SCORE', submitScore);
  yield takeLatest('ADD_BEER', addBeer)
  yield takeLatest('BEER_LOOKUP', beerLookup)
}

export default ScoreSaga;