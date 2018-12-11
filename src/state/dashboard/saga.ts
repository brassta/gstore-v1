import { delay } from 'redux-saga';
import { all, put, takeLatest } from 'redux-saga/effects';
import { mockFeed } from 'src/mocks';
import { FeedDay } from 'src/types';

import * as actions from './actionCreators';
import { ActionTypes } from './actions';

function* fetchFeed$() {
  try {
    // TODO:martins http request
    const feed: FeedDay[] = mockFeed();

    yield delay(400);
    yield put(actions.fetchFeedSuccess(feed));
  } catch (e) {
    yield put(actions.fetchFeedError());
  }
}
export default function*() {
  yield all([takeLatest(ActionTypes.FetchFeed, fetchFeed$)]);
}
