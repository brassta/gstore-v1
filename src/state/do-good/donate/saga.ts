import { all, put, takeLatest, select } from 'redux-saga/effects';

import { ActionObject } from 'src/utilities/redux';
import { getGoldAccountId } from 'src/state/selectors';
import http from 'src/services/http';

import * as actions from './actionCreators';
import { ActionTypes, ActionMap } from './actions';

function* donate$({
  payload: donation,
}: ActionObject<ActionMap, ActionTypes.Donate>) {
  try {
    // Currently users only have one payment account. In the future, account type or ID should come from the UI
    const accountId = yield select(getGoldAccountId);

    yield http.post('/donate', { ...donation, accountId });
    yield put(actions.donateSuccess(donation));
  } catch (e) {
    yield put(actions.donateError({}));
  }
}

export default function*() {
  yield all([takeLatest(ActionTypes.Donate, donate$)]);
}
