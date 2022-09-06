import createSagaMiddleware from 'redux-saga';
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger]
});

sagaMiddleware.run(rootSaga);

export default store;