import { Flight } from "../../../../models/Flight";
import { FlightSort } from "../../../../models/FlightSort";

export const sortFlights = (
	flights: ReadonlyArray<Flight>,
	sort = FlightSort.Short
) => {
	return [...flights].sort((a, b) =>
		sort === FlightSort.Long
			? b.durationHours - a.durationHours
			: a.durationHours - b.durationHours
	);
};
