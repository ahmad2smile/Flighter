import axios, { Canceler } from "axios";
import { FlightType } from "../models/FlightType";
import { Flight } from "../models/Flight";

const appBaseUrl = "https://tokigames-challenge.herokuapp.com/api/flights/";

const api = axios.create({
	baseURL: appBaseUrl,
	timeout: 30000
});

const CancelToken = axios.CancelToken;
let cancel: Canceler;

export const apiErrorHandler = (callBack: (error: string) => void) => (
	error: any
) => {
	if (axios.isCancel(error)) {
		if (process.env.NODE_ENV === "development")
			// tslint:disable-next-line: no-console
			console.error("Request canceled", error.message);
	} else {
		const message =
			error.response?.data?.message ||
			"Something went wrong. Please try again!";
		callBack(message);
	}
};

export const getFlights = async (
	flightType: FlightType
): Promise<Readonly<Flight>> => {
	// cancel previous requests
	if (cancel) {
		cancel();
	}

	const response = await api.get(`/${flightType}`, {
		cancelToken: new CancelToken(c => (cancel = c))
	});

	return response.data;
};
