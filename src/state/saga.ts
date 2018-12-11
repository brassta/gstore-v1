import { all } from 'redux-saga/effects';

import authSaga from './auth/saga';
import uiSaga from './ui/saga';
import balanceSaga from './balance/saga';
import competitionSaga from './competition/saga';
import dashboardSaga from './dashboard/saga';
import profileSaga from './profile/saga';
import doGoodSaga from './do-good/saga';

export default function*() {
  yield all([
    authSaga(),
    uiSaga(),
    balanceSaga(),
    competitionSaga(),
    dashboardSaga(),
    profileSaga(),
    doGoodSaga(),
  ]);
}
