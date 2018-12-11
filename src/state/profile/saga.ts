import { all, put, takeLatest } from 'redux-saga/effects';

import http from 'src/services/http';
import { ACCOUNTS_API_URL } from 'src/constants';

import * as actions from './actionCreators';
import { ActionTypes } from './actions';

function* fetchUserProfile$() {
  try {
    const { email, username, avatarImage, coverImage } = yield http.get(
      `${ACCOUNTS_API_URL}/me`
    );

    const profile = {
      email,
      username,
      // TODO remove patch after BE starts sending proper URLs
      avatarImage: `http://${avatarImage}`,
      coverImage,
    };

    yield put(actions.fetchUserProfileSuccess(profile));
  } catch (e) {
    yield put(actions.fetchUserProfileError());
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FetchUserProfile, fetchUserProfile$)]);
}
