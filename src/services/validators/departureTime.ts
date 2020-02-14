import { Flight } from "../../models/Flight";

export const departureTime = (values: Flight) => {
	const value = values.departureTime;

	if (!value) {
		return "Departure Time Required";
	}

	return "";
};
