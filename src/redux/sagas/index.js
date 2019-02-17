import { all } from 'redux-saga/effects';
import ScoreSaga from './ScoreSaga';


export default function* rootSaga() {
  yield all([
    ScoreSaga(),
  ]);
}