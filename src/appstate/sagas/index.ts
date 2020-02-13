import { all } from "redux-saga/effects";

import { flightGetSagaWatcher } from "./flights/flightGetSaga";

export default function* rootSaga() {
	yield all([flightGetSagaWatcher()]);
}
