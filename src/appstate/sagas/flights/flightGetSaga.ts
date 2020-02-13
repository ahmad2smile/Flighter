import { call, takeLatest, put } from "redux-saga/effects";

import {
	flightsGetSuccess,
	flightsGetError,
	FlightActionTypes,
	FlightsGetAction
} from "../../actions/flights/flightActions";

import { getFlights } from "../../../services/dataService";
import { FlightType } from "../../../models/FlightType";
import { Flight } from "../../../models/Flight";

export function* flightGetSaga(_action: FlightsGetAction) {
	try {
		const response = yield call(() => getFlights(FlightType.Business));
		console.log("TCL: function*flightsGetSaga -> response", response);

		const flights: ReadonlyArray<Flight> = response.data;

		yield put(flightsGetSuccess(flights));
	} catch (err) {
		yield put(flightsGetError(err));
	}
}

export function* flightGetSagaWatcher() {
	yield takeLatest(FlightActionTypes.FLIGHT_GET_REQUEST, flightGetSaga);
}
