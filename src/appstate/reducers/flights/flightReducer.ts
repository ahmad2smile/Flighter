import { Action } from "redux";

import { RequestTypes } from "../../sagas/RequestTypes";
import {
	FlightGetActionTypes,
	FlightsGetSuccessAction,
	FlightsGetErrorAction,
	FlightsFilterAction
} from "../../actions/flights/flightGetActions";
import {
	FlightCreateActionTypes,
	FlightsCreateAction,
	FlightsCreateUndoAction,
	FlightsCreateErrorAction
} from "../../actions/flights/flightCreateActions";
import { Flight } from "../../../models/Flight";
import { FlightFilter } from "../../../models/FlightFilter";
import { FlightType } from "../../../models/FlightType";
import { filterFlights } from "./utils/filterFlights";
import { sortFlights } from "./utils/sortFlights";

export interface FlightState {
	readonly flights: ReadonlyArray<Flight>;
	readonly unFilteredFlights: ReadonlyArray<Flight>;
	readonly flightRequestState: RequestTypes;
	readonly flightRequestError: string;
	readonly flightCreateRequestState: RequestTypes;
	readonly flightCreateRequestError: string;
	readonly filter: FlightFilter;
}

export const initialState: FlightState = {
	flights: [],
	unFilteredFlights: [],
	flightRequestState: RequestTypes.IDLE,
	flightRequestError: "",
	flightCreateRequestState: RequestTypes.IDLE,
	flightCreateRequestError: "",
	filter: { search: "", type: FlightType.All }
};

export const flightsReducer = (
	state: FlightState = initialState,
	action: Action<FlightGetActionTypes | FlightCreateActionTypes>
): FlightState => {
	switch (action.type) {
		case FlightGetActionTypes.FLIGHT_GET_REQUEST:
			return {
				...state,
				flightRequestState: RequestTypes.REQUESTED,
				flightRequestError: ""
			};
		case FlightGetActionTypes.FLIGHT_GET_REQUEST_SUCCESS:
			const flights = (action as FlightsGetSuccessAction).payload;
			const sortedFlights = sortFlights(flights);
			const filteredFlights = filterFlights(state.filter, sortedFlights);

			return {
				...state,
				flights: filteredFlights,
				unFilteredFlights: sortedFlights,
				flightRequestState: RequestTypes.SUCCESS
			};
		case FlightGetActionTypes.FLIGHT_GET_REQUEST_ERROR:
			return {
				...state,
				flightRequestError: (action as FlightsGetErrorAction).payload,
				flightRequestState: RequestTypes.ERROR
			};
		case FlightGetActionTypes.FLIGHT_GET_CLEAR_ERROR:
			return {
				...state,
				flightRequestError: "",
				flightRequestState: RequestTypes.IDLE
			};
		case FlightCreateActionTypes.FLIGHT_CREATE_REQUEST:
			const newFlight = (action as FlightsCreateAction).payload;
			const newFlights = sortFlights([
				...state.unFilteredFlights,
				newFlight
			]);

			return {
				...state,
				flights: newFlights,
				unFilteredFlights: newFlights,
				flightCreateRequestState: RequestTypes.REQUESTED,
				flightCreateRequestError: ""
			};
		case FlightCreateActionTypes.FLIGHT_CREATE_UNDO_REQUEST:
			const failedCreateFlight = (action as FlightsCreateUndoAction)
				.payload;

			return {
				...state,
				unFilteredFlights: state.unFilteredFlights.filter(
					f => f.id !== failedCreateFlight.id
				),
				flights: state.flights.filter(
					f => f.id !== failedCreateFlight.id
				)
			};
		case FlightCreateActionTypes.FLIGHT_CREATE_REQUEST_SUCCESS:
			return {
				...state,
				flightCreateRequestState: RequestTypes.SUCCESS
			};
		case FlightCreateActionTypes.FLIGHT_CREATE_REQUEST_ERROR:
			return {
				...state,
				flightCreateRequestError: (action as FlightsCreateErrorAction)
					.payload,
				flightCreateRequestState: RequestTypes.ERROR
			};
		case FlightCreateActionTypes.FLIGHT_CREATE_CLEAR_ERROR:
			return {
				...state,
				flightCreateRequestError: "",
				flightCreateRequestState: RequestTypes.IDLE
			};
		case FlightGetActionTypes.FLIGHT_FILTER:
			const filter = (action as FlightsFilterAction).payload;
			return {
				...state,
				filter: { ...filter },
				flights: filterFlights(filter, state.unFilteredFlights)
			};
		default:
			return state;
	}
};
