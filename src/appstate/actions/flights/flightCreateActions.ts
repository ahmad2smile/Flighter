import { IAction } from "../IAction";
import { Flight } from "../../../models/Flight";

export enum FlightCreateActionTypes {
	FLIGHT_CREATE_REQUEST = "FLIGHT_CREATE_REQUEST",
	FLIGHT_CREATE_UNDO_REQUEST = "FLIGHT_CREATE_UNDO_REQUEST",
	FLIGHT_CREATE_REQUEST_SUCCESS = "FLIGHT_CREATE_REQUEST_SUCCESS",
	FLIGHT_CREATE_REQUEST_ERROR = "FLIGHT_CREATE_REQUEST_ERROR",
	FLIGHT_CREATE_CLEAR_ERROR = "FLIGHT_CREATE_CLEAR_ERROR"
}

export type FlightsCreateAction = IAction<Flight, FlightCreateActionTypes>;
export type FlightsCreateUndoAction = IAction<Flight, FlightCreateActionTypes>;
export type FlightsCreateSuccessAction = IAction<
	undefined,
	FlightCreateActionTypes
>;
export type FlightsCreateErrorAction = IAction<string, FlightCreateActionTypes>;
export type FlightsClearErrorAction = IAction<
	undefined,
	FlightCreateActionTypes
>;

export const flightsCreateRequest = (payload: Flight): FlightsCreateAction => {
	return {
		payload,
		type: FlightCreateActionTypes.FLIGHT_CREATE_REQUEST
	};
};

export const flightsCreateUndoRequest = (
	payload: Flight
): FlightsCreateAction => {
	return {
		payload,
		type: FlightCreateActionTypes.FLIGHT_CREATE_UNDO_REQUEST
	};
};

export const flightsCreateSuccess = (): FlightsCreateSuccessAction => {
	return {
		payload: undefined,
		type: FlightCreateActionTypes.FLIGHT_CREATE_REQUEST_SUCCESS
	};
};

export const flightsCreateError = (
	payload: string
): FlightsCreateErrorAction => {
	return {
		payload,
		type: FlightCreateActionTypes.FLIGHT_CREATE_REQUEST_ERROR
	};
};

export const flightsCreateClearError = (): FlightsClearErrorAction => {
	return {
		payload: undefined,
		type: FlightCreateActionTypes.FLIGHT_CREATE_CLEAR_ERROR
	};
};
