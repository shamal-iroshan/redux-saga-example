import {put, call} from 'redux-saga/effects';
import {albumsActions} from "../slice/albumsSlice";
import {ApiRequestMethods, publicApiRequest} from "../../../utils/apiService";

async function callApi() {
  const url = `albums?userId=${process.env.REACT_APP_USER_ID}`
  return publicApiRequest(ApiRequestMethods.GET, url)
}

export default function* callGetAllAlbumsSaga () {
  try {
    const allAlbums = yield call(callApi);
    yield put(albumsActions.fetchAlbumsSuccess(allAlbums));
  } catch (error) {
    console.error('callGeAllAlbumsSaga', error);
    yield put(albumsActions.fetchAlbumsFailure('error'));
  }
}