import { Flight } from "../../models/Flight";

export const departure = (values: Flight) => {
	const value = values.departure;

	if (!value) {
		return "Departure City Required";
	} else if (value.length < 3) {
		return "Departure City must be at least 3 characters";
	} else if (value.length > 20) {
		return "Departure City should be 20 characters or less";
	}
	return "";
};
