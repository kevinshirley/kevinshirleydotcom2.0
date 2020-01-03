import { put, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';

import { UI, ui } from 'ui/src/store/actions';

export function* watchOpenModal() {
  yield takeLatest(UI.OPEN_MODAL, openModal);
}

export function* watchCloseModal() {
  yield takeLatest(UI.CLOSE_MODAL, closeModal);
}

function* openModal() {
  console.log('open modal saga');
  // yield put(ui.setModalOpened());
}

function* closeModal() {
  console.log('close modal saga');
  // yield put(ui.setModalOpened());
}
