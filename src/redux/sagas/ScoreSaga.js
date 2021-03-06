import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "UPDATE_SCORE" actions
// gets all of a users flashcards
function* submitScore(action) {
  try {

    yield call(axios.post, '/submitScore', action.payload);
    yield put({type: 'ADD_BEER', payload: action.payload})
    yield put({type: 'ADD_BREWERY', payload: action.payload})
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

function* addBrewery(action) {
  try {
    yield call(axios.post, '/submitScore/addBrewery', action.payload);

  } catch (error) {
    console.log('Error Adding a Brewery', error);
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

function* breweryLookup(action) {
  try {
    const response = yield call(axios.get, '/submitScore/brewery', {params: {name: action.payload}})
    yield put({type: 'SET_BREWERY_LIST', payload: response.data})
  } catch(error){
    console.log('Error Finding a Brewery', error)
  }
}

// function* addPicture(action) {
//   try {
//     const response = yield call(axios.get, '/picture', {params: {filename: action.payload.filename, picture: action.payload.picture}})
//     yield put({type: 'SET_CREDENTIALS', payload: response.data})
//   } catch(error){
//     console.log('Error Setting Credentials', error)
//   }
// }

function* ScoreSaga() {
  yield takeLatest('SUBMIT_SCORE', submitScore);
  yield takeLatest('ADD_BEER', addBeer)
  yield takeLatest('ADD_BREWERY', addBrewery)
  yield takeLatest('BEER_LOOKUP', beerLookup)
  yield takeLatest('BREWERY_LOOKUP', breweryLookup)
  // yield takeLatest('ADD_PICTURE', addPicture)
}

export default ScoreSaga;