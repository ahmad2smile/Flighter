import { all } from "redux-saga/effects";

import { flightGetSagaWatcher } from "./flights/flightGetSaga";
import { flightCreateSagaWatcher } from "./flights/flightCreateSaga";

export default function* rootSaga() {
	yield all([flightGetSagaWatcher(), flightCreateSagaWatcher()]);
}
