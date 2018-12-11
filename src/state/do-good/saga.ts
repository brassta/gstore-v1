import { all } from 'redux-saga/effects';

import projectsSaga from './projects/saga';
import donateSaga from './donate/saga';

export default function*() {
  yield all([projectsSaga(), donateSaga()]);
}
