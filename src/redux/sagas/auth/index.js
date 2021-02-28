import { all, fork } from 'redux-saga/effects';
import signIn from './signIn';
import signUp from './signUp';

export default function* auth() {
  yield all([
    fork(signIn),
    fork(signUp),
  ]);
}
