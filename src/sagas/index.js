import { fork, all, spawn } from 'redux-saga/effects';
import initialSaga from './initialSaga';
import noteItemSaga from './noteItemSaga';

const rootSaga = function * rootSaga () {
  console.log('saga');
  yield all([
    fork(noteItemSaga)
  ]);

  yield spawn(initialSaga);
}

export default rootSaga;
