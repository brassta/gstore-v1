import { all, put, takeLatest } from 'redux-saga/effects';

import http from 'src/services/http';

import * as actions from './actionCreators';
import { ActionTypes } from './actions';

function* fetchGoldBalance$() {
  try {
    const balance = yield http.get('/user/balance');

    yield put(actions.fetchGoldBalanceSuccess(balance));
  } catch (e) {
    yield put(actions.fetchGoldBalanceError());
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.FetchGoldBalance, fetchGoldBalance$)]);
}
