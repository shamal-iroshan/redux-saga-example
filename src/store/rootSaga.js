import { spawn } from 'redux-saga/effects';
import albumsSaga from "../views/albums/sagas/albumsSaga";

export default function* rootSaga() {
  yield spawn(albumsSaga);
}