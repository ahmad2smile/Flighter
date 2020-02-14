import { Flight } from "../models/Flight";

import { arrival, arrivalTime, departure, departureTime } from "./validators/";

type Errors<T> = {
	[K in keyof T]: string;
};

export const validateFlightForm = (values: Flight) => {
	const errors: Errors<Flight> = {
		id: "",
		departure: departure(values),
		arrival: arrival(values),
		departureTime: departureTime(values),
		arrivalTime: arrivalTime(values),
		durationHours: "",
		type: ""
	};

	return errors;
};
