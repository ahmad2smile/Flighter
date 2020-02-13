import { Action } from "redux";

import { RequestTypes } from "../../sagas/RequestTypes";
import {
	FlightActionTypes,
	FlightsGetSuccessAction,
	FlightsGetErrorAction
} from "../../actions/flights/flightActions";
import { Flight } from "../../../models/Flight";

export interface FlightState {
	readonly flights: ReadonlyArray<Flight>;
	readonly flightRequestState: RequestTypes;
	readonly flightRequestError: string;
}

export const initialState: FlightState = {
	flights: [],
	flightRequestState: RequestTypes.IDLE,
	flightRequestError: ""
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
			return {
				...state,
				...(action as FlightsGetSuccessAction).payload,
				flightRequestState: RequestTypes.SUCCESS
			};
		case FlightActionTypes.FLIGHT_GET_REQUEST_ERROR:
			return {
				...state,
				flightRequestError:
					(action as FlightsGetErrorAction).payload || "",
				flightRequestState: RequestTypes.ERROR
			};
		default:
			return initialState;
	}
};
