import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "GET_RECENTLY_RATED" actions
// gets all ratings
function* getRecentlyRated(action) {
  try {

    const response = yield call(axios.get, '/ratings');
    yield put({type: 'SET_ALL_RATINGS', payload: response.data})
  } catch (error) {
    console.log('Error Getting Global Ratings:', error);
    
  }
}

function* RatingsRetrieverSaga() {
  yield takeLatest('GET_RECENTLY_RATED', getRecentlyRated);
}

export default RatingsRetrieverSaga;