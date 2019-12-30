import { all } from 'redux-saga/effects';
import 'isomorphic-unfetch';
import placeholderSaga from 'ui/src/store/sagas/placeholder';

function* rootSaga() {
  yield all([placeholderSaga]);
}

export default rootSaga;