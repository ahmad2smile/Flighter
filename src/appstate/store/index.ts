import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import rootReducer from "../reducers";

import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
	return createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
};

export const store = configureStore();

// Must initiate sagas after creating the store
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store); // For redux persist PersistGate
