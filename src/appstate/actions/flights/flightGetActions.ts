import { IAction } from "../IAction";
import { Flight } from "../../../models/Flight";
import { FlightFilter } from "../../../models/FlightFilter";

export enum FlightGetActionTypes {
	FLIGHT_GET_REQUEST = "FLIGHT_GET_REQUEST",
	FLIGHT_GET_REQUEST_SUCCESS = "FLIGHT_GET_REQUEST_SUCCESS",
	FLIGHT_GET_BUSINESS_REQUEST_SUCCESS = "FLIGHT_GET_BUSINESS_REQUEST_SUCCESS",
	FLIGHT_GET_CHEAP_REQUEST_SUCCESS = "FLIGHT_GET_CHEAP_REQUEST_SUCCESS",
	FLIGHT_GET_REQUEST_ERROR = "FLIGHT_GET_REQUEST_ERROR",
	FLIGHT_GET_CLEAR_ERROR = "FLIGHT_GET_CLEAR_ERROR",
	FLIGHT_FILTER = "FLIGHT_FILTER"
}

export type FlightsGetAction = IAction<undefined, FlightGetActionTypes>;
export type FlightsGetSuccessAction = IAction<
	ReadonlyArray<Flight>,
	FlightGetActionTypes
>;
export type FlightsBusinessGetSuccessAction = IAction<
	ReadonlyArray<Flight>,
	FlightGetActionTypes
>;
export type FlightsCheapGetSuccessAction = IAction<
	ReadonlyArray<Flight>,
	FlightGetActionTypes
>;
export type FlightsGetErrorAction = IAction<string, FlightGetActionTypes>;
export type FlightsGetClearErrorAction = IAction<
	undefined,
	FlightGetActionTypes
>;

export type FlightsFilterAction = IAction<FlightFilter, FlightGetActionTypes>;

export const flightsGetRequest = (): FlightsGetAction => {
	return {
		payload: undefined,
		type: FlightGetActionTypes.FLIGHT_GET_REQUEST
	};
};

export const flightsGetSuccess = (
	payload: ReadonlyArray<Flight>
): FlightsGetSuccessAction => {
	return {
		payload,
		type: FlightGetActionTypes.FLIGHT_GET_REQUEST_SUCCESS
	};
};

export const flightsBusinessGetSuccess = (
	payload: ReadonlyArray<Flight>
): FlightsBusinessGetSuccessAction => {
	return {
		payload,
		type: FlightGetActionTypes.FLIGHT_GET_BUSINESS_REQUEST_SUCCESS
	};
};

export const flightsCheapGetSuccess = (
	payload: ReadonlyArray<Flight>
): FlightsCheapGetSuccessAction => {
	return {
		payload,
		type: FlightGetActionTypes.FLIGHT_GET_CHEAP_REQUEST_SUCCESS
	};
};

export const flightsGetError = (payload: string): FlightsGetErrorAction => {
	return {
		payload,
		type: FlightGetActionTypes.FLIGHT_GET_REQUEST_ERROR
	};
};

export const flightsGetClearError = (): FlightsGetClearErrorAction => {
	return {
		payload: undefined,
		type: FlightGetActionTypes.FLIGHT_GET_CLEAR_ERROR
	};
};

export const filterFlightsAction = (
	payload: FlightFilter
): FlightsFilterAction => {
	return {
		payload,
		type: FlightGetActionTypes.FLIGHT_FILTER
	};
};
