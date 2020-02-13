import { Action } from "redux";

import { RequestTypes } from "../../sagas/RequestTypes";
import {
	FlightActionTypes,
	FlightsGetSuccessAction,
	FlightsGetErrorAction,
	FlightsFilterAction
} from "../../actions/flights/flightActions";
import { Flight } from "../../../models/Flight";
import { FlightFilter } from "../../../models/FlightFilter";
import { FlightType } from "../../../models/FlightType";
import { filterFlights } from "./utils/filterFlights";

export interface FlightState {
	readonly flights: ReadonlyArray<Flight>;
	readonly unFilteredFlights: ReadonlyArray<Flight>;
	readonly flightRequestState: RequestTypes;
	readonly flightRequestError: string;
	readonly filter: FlightFilter;
}

export const initialState: FlightState = {
	flights: [],
	unFilteredFlights: [],
	flightRequestState: RequestTypes.IDLE,
	flightRequestError: "",
	filter: { search: "", type: FlightType.All }
};

export const flightsReducer = (
	state: FlightState = initialState,
	action: Action<FlightActionTypes>
): FlightState => {
	switch (action.type) {
		case FlightActionTypes.FLIGHT_GET_REQUEST:
			return {
				...state,
				flightRequestState: RequestTypes.REQUESTED
			};
		case FlightActionTypes.FLIGHT_GET_REQUEST_SUCCESS:
			const flights = (action as FlightsGetSuccessAction).payload;
			return {
				...state,
				flights,
				unFilteredFlights: flights,
				flightRequestState: RequestTypes.SUCCESS
			};
		case FlightActionTypes.FLIGHT_GET_REQUEST_ERROR:
			return {
				...state,
				flightRequestError: (action as FlightsGetErrorAction).payload,
				flightRequestState: RequestTypes.ERROR
			};
		case FlightActionTypes.FLIGHT_FILTER:
			const filter = (action as FlightsFilterAction).payload;
			return {
				...state,
				filter: { ...filter },
				flights: filterFlights(filter, state.unFilteredFlights)
			};
		default:
			return initialState;
	}
};
