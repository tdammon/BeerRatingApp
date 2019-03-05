import { all } from 'redux-saga/effects';
import ScoreSaga from './ScoreSaga';
import userSaga from './userSaga'
import loginSaga from './loginSaga';
import registrationSaga from './RegistrationSaga';
import ratingsRetrieverSaga from './RatingsRetrieverSaga';

export default function* rootSaga() {
  yield all([
    ScoreSaga(),
    userSaga(),
    loginSaga(),
    registrationSaga(),
    ratingsRetrieverSaga(),
  ]);
}