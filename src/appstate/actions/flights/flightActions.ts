import { IAction } from "../IAction";
import { Flight } from "../../../models/Flight";

export enum FlightActionTypes {
	FLIGHT_GET_REQUEST = "FLIGHT_GET_REQUEST",
	FLIGHT_GET_REQUEST_SUCCESS = "FLIGHT_GET_REQUEST_SUCCESS",
	FLIGHT_GET_BUSINESS_REQUEST_SUCCESS = "FLIGHT_GET_BUSINESS_REQUEST_SUCCESS",
	FLIGHT_GET_CHEAP_REQUEST_SUCCESS = "FLIGHT_GET_CHEAP_REQUEST_SUCCESS",
	FLIGHT_GET_REQUEST_ERROR = "FLIGHT_GET_REQUEST_ERROR"
}

export type FlightsGetAction = IAction<undefined, FlightActionTypes>;

export type FlightsGetSuccessAction = IAction<
	ReadonlyArray<Flight>,
	FlightActionTypes
>;

export type FlightsBusinessGetSuccessAction = IAction<
	ReadonlyArray<Flight>,
	FlightActionTypes
>;

export type FlightsCheapGetSuccessAction = IAction<
	ReadonlyArray<Flight>,
	FlightActionTypes
>;

export type FlightsGetErrorAction = IAction<string, FlightActionTypes>;

export type FlightsActions =
	| FlightsGetAction
	| FlightsBusinessGetSuccessAction
	| FlightsCheapGetSuccessAction
	| FlightsGetErrorAction;

export const flightsGetRequest = (): FlightsGetAction => {
	return {
		payload: undefined,
		type: FlightActionTypes.FLIGHT_GET_REQUEST
	};
};

export const flightsGetSuccess = (
	payload: ReadonlyArray<Flight>
): FlightsGetSuccessAction => {
	return {
		payload,
		type: FlightActionTypes.FLIGHT_GET_REQUEST_SUCCESS
	};
};

export const flightsBusinessGetSuccess = (
	payload: ReadonlyArray<Flight>
): FlightsBusinessGetSuccessAction => {
	return {
		payload,
		type: FlightActionTypes.FLIGHT_GET_BUSINESS_REQUEST_SUCCESS
	};
};

export const flightsCheapGetSuccess = (
	payload: ReadonlyArray<Flight>
): FlightsCheapGetSuccessAction => {
	return {
		payload,
		type: FlightActionTypes.FLIGHT_GET_CHEAP_REQUEST_SUCCESS
	};
};

export const flightsGetError = (payload: string): FlightsGetErrorAction => {
	return {
		payload,
		type: FlightActionTypes.FLIGHT_GET_REQUEST_ERROR
	};
};
