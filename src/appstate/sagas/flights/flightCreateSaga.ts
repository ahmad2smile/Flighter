import { call, takeLatest, put, delay } from "redux-saga/effects";

import {
	FlightsCreateAction,
	flightsCreateSuccess,
	flightsCreateError,
	FlightCreateActionTypes,
	flightsCreateUndoRequest,
	flightsCreateClearError
} from "../../actions/flights/flightCreateActions";

import { createFlights, apiErrorHandler } from "../../../services/dataService";

export function* flightCreateSaga(action: FlightsCreateAction) {
	const flight = action.payload;

	try {
		yield call(createFlights, flight);

		yield put(flightsCreateSuccess());
	} catch (err) {
		yield put(flightsCreateUndoRequest(flight));
		yield put(flightsCreateError(apiErrorHandler(err)));
		yield delay(5000);
		yield put(flightsCreateClearError());
	}
}

export function* flightCreateSagaWatcher() {
	yield takeLatest(
		FlightCreateActionTypes.FLIGHT_CREATE_REQUEST,
		flightCreateSaga
	);
}
