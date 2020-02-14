import { Flight } from "../../models/Flight";

export const arrival = (values: Flight) => {
	const value = values.arrival;
	if (!value) {
		return "Arrival City Required";
	} else if (value.length < 3) {
		return "Arrival City must be at least 3 characters";
	} else if (value.length > 20) {
		return "Arrival City should be 20 characters or less";
	}
	return "";
};
