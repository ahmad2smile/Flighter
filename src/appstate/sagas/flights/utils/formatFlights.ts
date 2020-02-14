import { FlightType } from "../../../../models/FlightType";
import { Flight } from "../../../../models/Flight";
import {
	RawBusinessFlight,
	RawCheapFlight
} from "../../../../models/RawFlight";
import { diffUnixTime } from "../../../../services/dateService";
import { getUniqueKey } from "../../../../utils/uniqueKeyGenerator";

export const formatFlights = (type: FlightType) => (
	flight: RawBusinessFlight | RawCheapFlight
): Flight => {
	let arrivalTime = 0;
	let departureTime = 0;
	let arrival = "";
	let departure = "";

	if (type === FlightType.Cheap) {
		const cheapFlight = flight as RawCheapFlight;

		[departure, arrival] = cheapFlight.route.split("-");
		arrivalTime = cheapFlight.arrival;
		departureTime = cheapFlight.departure;
	} else {
		const businessFlight = flight as RawBusinessFlight;

		arrivalTime = businessFlight.arrivalTime;
		departureTime = businessFlight.departureTime;
		arrival = businessFlight.arrival;
		departure = businessFlight.departure;
	}

	return {
		id: getUniqueKey(),
		arrivalTime,
		departureTime,
		arrival,
		departure,
		durationHours: diffUnixTime(departureTime, arrivalTime),
		type
	};
};
