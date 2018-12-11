import { all, put, takeLatest } from 'redux-saga/effects';

import { HumanitarianProject } from 'src/types';
import http from 'src/services/http';

import * as actions from './actionCreators';
import { ActionTypes } from './actions';

function* fetchHumanitarianProjects$() {
  try {
    const projects: HumanitarianProject[] = yield http.get('/donate/projects');
    yield put(actions.fetchHumanitarianProjectsSuccess(projects));
  } catch (e) {
    yield put(actions.fetchHumanitarianProjectsError());
  }
}

export default function*() {
  yield all([
    takeLatest(
      ActionTypes.FetchHumanitarianProjects,
      fetchHumanitarianProjects$
    ),
  ]);
}
