import { takeEvery } from 'redux-saga/effects';
import {albumsActions} from "../slice/albumsSlice";
import callGetAllAlbumsSaga from "./callGetAllAlbumsSaga";
import callGetAllPhotosSaga from "./callGetAllPhotosSaga";

export default function* albumsSaga () {
  yield takeEvery(albumsActions.fetchAlbums, callGetAllAlbumsSaga);
  yield takeEvery(albumsActions.fetchPhotos, callGetAllPhotosSaga);
}