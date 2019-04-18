import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* barLookup(action) {
    try {
      const response = yield call(axios.get, '/barlookup', {params: {name: action.payload}})
      yield put({type: 'SET_BAR_LIST', payload: response.data})
    } catch(error){
      console.log('Error Finding a Bar', error)
    }
  }

function* BarSaga() {
    yield takeLatest('BAR_LOOKUP', barLookup)
  }
  
  export default BarSaga;