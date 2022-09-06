import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  fetchAlbumsIsLoading: false,
  albums: [],
  fetchAlbumsHasError: {hasError: false, description: ''},
  fetchPhotosIsLoading: false,
  photos: [],
  fetchPhotosHasError: {hasError: false, description: ''},
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    fetchAlbums(state) {
      state.fetchAlbumsIsLoading = true;
      state.fetchAlbumsHasError = {hasError: false, description: ''};
    },
    fetchAlbumsSuccess(state, action) {
      state.fetchAlbumsIsLoading = false;
      state.albums = action.payload;
      state.fetchAlbumsHasError = {hasError: false, description: ''};
    },
    fetchAlbumsFailure(state, action) {
      state.fetchAlbumsIsLoading = false;
      state.fetchAlbumsHasError = {hasError: true, description: action.payload};
    },
    fetchPhotos(state, action) {
      state.fetchPhotosIsLoading = true;
      state.fetchPhotosHasError = {hasError: false, description: ''};
    },
    fetchPhotosSuccess(state, action) {
      state.fetchPhotosIsLoading = false;
      state.photos = action.payload;
      state.fetchPhotosHasError = {hasError: false, description: ''};
    },
    fetchPhotosFailure(state, action) {
      state.fetchPhotosIsLoading = false;
      state.fetchPhotosHasError = {hasError: true, description: action.payload};
    },
    resetAlbumStatus(state) {
      state.fetchAlbumsIsLoading = false;
      state.fetchAlbumsHasError = {hasError: false, description: ''};
    },
    resetPhotoStatus(state) {
      state.fetchPhotosIsLoading = false;
      state.fetchAlbumsHasError = {hasError: false, description: ''};
    }
  }
});

//Actions
export const albumsActions = albumsSlice.actions;

//Selectors
export const selectAlbums = (state) => state.albumsReducer.albums;
export const selectPhotos = (state) => state.albumsReducer.photos;
export const selectAlbumIsLoading = (state) => state.albumsReducer.fetchAlbumsIsLoading;
export const selectPhotosIsLoading = (state) => state.albumsReducer.fetchPhotosIsLoading;
export const selectAlbumsHasError = (state) => state.albumsReducer.fetchAlbumsHasError;
export const selectPhotosHasError = (state) => state.albumsReducer.fetchPhotosHasError;

//Reducer
const albumsReducer = albumsSlice.reducer;
export default albumsReducer;