import { takeLatest, put, call } from 'redux-saga/effects';
import Actions from 'actions';
import * as api from 'api';

function* signUp({ data }) {
  try {
    yield call(api.signUp, data);
    yield put(Actions.signUpSuccess);
  } catch (error) {
    yield put(Actions.signUpFail(error));
  }
}

export default function* watcher() {
  yield takeLatest(Actions.SIGN_UP_REQUEST, signUp);
}
