import { call, takeLatest, put, all, delay } from "redux-saga/effects";

import {
	flightsGetSuccess,
	flightsGetError,
	FlightGetActionTypes,
	flightsGetClearError
} from "../../actions/flights/flightGetActions";

import {
	getBusinessFlights,
	getCheapFlights
} from "../../../services/dataService";

import { formatFlights } from "./utils/formatFlights";
import { FlightType } from "../../../models/FlightType";

export function* flightGetSaga() {
	try {
		const [rawBusinessFlights, rawCheapFlights] = yield all([
			call(getBusinessFlights),
			call(getCheapFlights)
		]);

		const businessFlights = rawBusinessFlights.map(
			formatFlights(FlightType.Business)
		);
		const cheapFlights = rawCheapFlights.map(
			formatFlights(FlightType.Cheap)
		);

		yield put(flightsGetSuccess([...businessFlights, ...cheapFlights]));
	} catch (err) {
		yield put(flightsGetError(err));
		yield delay(5000);
		yield put(flightsGetClearError());
	}
}

export function* flightGetSagaWatcher() {
	yield takeLatest(FlightGetActionTypes.FLIGHT_GET_REQUEST, flightGetSaga);
}
