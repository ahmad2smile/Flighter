import { Flight } from "../../models/Flight";
import { diffUnixTime } from "../dateService";

export const arrivalTime = (values: Flight) => {
	const value = values.arrivalTime;

	if (!value) {
		return "Arrival Time Required";
	}

	if (diffUnixTime(values.departureTime, value, "minutes") < 30) {
		return "Arrival Time should be at least 30 min after Departure Time";
	}

	return "";
};
