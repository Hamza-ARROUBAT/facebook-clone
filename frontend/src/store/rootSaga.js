import { all, takeLatest } from '@redux-saga/core/effects';
import { apiCall } from 'api/apiCall';
import { FETCH_POSTS } from './reducers/posts/posts.types';

function* rootSaga() {
  // movies
  yield all([takeLatest(FETCH_POSTS, apiCall)]);

}

export default rootSaga;
