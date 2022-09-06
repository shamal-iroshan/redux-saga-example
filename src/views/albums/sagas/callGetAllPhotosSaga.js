import {put, call} from 'redux-saga/effects';
import {albumsActions} from "../slice/albumsSlice";
import {ApiRequestMethods, publicApiRequest} from "../../../utils/apiService";

async function callApi(albumIds) {
  const query = albumIds.map((el) => `albumId=${el}`).join('&');
  const url = `photos?${query}`
  return publicApiRequest(ApiRequestMethods.GET, url)
}

export default function* callGetAllPhotosSaga ({payload}) {
  try {
    const allPhotos = yield call(callApi, payload);
    yield put(albumsActions.fetchPhotosSuccess(allPhotos));
  } catch (error) {
    console.error('callGetAllPhotosSaga', error);
    yield put(albumsActions.fetchPhotosFailure('error'));
  }
}