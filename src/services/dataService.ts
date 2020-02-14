import axios, { Canceler } from "axios";
import { RawBusinessFlight, RawCheapFlight } from "../models/RawFlight";
import { Flight } from "../models/Flight";

const appBaseUrl = "https://tokigames-challenge.herokuapp.com/api/flights/";

const api = axios.create({
	baseURL: appBaseUrl,
	timeout: 30000
});

const CancelToken = axios.CancelToken;

export const apiErrorHandler = (error: any) => {
	if (axios.isCancel(error)) {
		if (process.env.NODE_ENV === "development")
			// tslint:disable-next-line: no-console
			console.error("Request canceled", error.message);
		return "";
	} else {
		const message =
			error.response?.message ||
			error.message ||
			"Something went wrong. Please try again!";

		return message;
	}
};

let getBusinessFlightsCancel: Canceler;

export const getBusinessFlights = async (): Promise<Readonly<
	RawBusinessFlight
>> => {
	// cancel previous requests
	if (getBusinessFlightsCancel) {
		getBusinessFlightsCancel();
	}

	const response = await api.get(`/business`, {
		cancelToken: new CancelToken(c => (getBusinessFlightsCancel = c))
	});

	return response.data.data;
};

let getCheapFlightsCancel: Canceler;

export const getCheapFlights = async (): Promise<Readonly<RawCheapFlight>> => {
	// cancel previous requests
	if (getCheapFlightsCancel) {
		getCheapFlightsCancel();
	}

	const response = await api.get(`/cheap`, {
		cancelToken: new CancelToken(c => (getCheapFlightsCancel = c))
	});

	return response.data.data;
};

let createFlightsCancel: Canceler;

export const createFlights = async (
	flight: Flight
): Promise<Readonly<RawCheapFlight>> => {
	// cancel previous requests
	if (createFlightsCancel) {
		createFlightsCancel();
	}

	const response = await api.post(`/${flight.type}`, flight, {
		cancelToken: new CancelToken(c => (createFlightsCancel = c))
	});

	return response.data.data;
};
