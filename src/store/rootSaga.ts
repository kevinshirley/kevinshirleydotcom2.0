import { all, fork } from 'redux-saga/effects';
import 'isomorphic-unfetch';
import { watchOpenModal, watchCloseModal } from 'src/store/sagas/ui';

function* rootSaga() {
  yield all([
    watchOpenModal(),
    watchCloseModal(),
  ]);
}

export default rootSaga;