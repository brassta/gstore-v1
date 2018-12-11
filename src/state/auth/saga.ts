import { all, takeLatest } from 'redux-saga/effects';

import { ACCOUNTS_URL, AUTH_COOKIE } from 'src/constants';
import cookie from 'src/services/cookie';

import { ActionTypes } from './actions';

function* logout$() {
  yield cookie.remove(AUTH_COOKIE);
  yield (window.location.href = ACCOUNTS_URL);
}

export default function*() {
  yield all([takeLatest(ActionTypes.Logout, logout$)]);
}
