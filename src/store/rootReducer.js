import {combineReducers} from "@reduxjs/toolkit";
import albumsReducer from "../views/albums/slice/albumsSlice";

const rootReducer = combineReducers({
  albumsReducer
});

export default rootReducer;