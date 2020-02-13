import { FlightFilter } from "../../../../models/FlightFilter";
import { Flight } from "../../../../models/Flight";
import { FlightType } from "../../../../models/FlightType";

export const filterFlights = (
	filter: FlightFilter,
	flights: ReadonlyArray<Flight>
) => {
	const { search, type } = filter;

	return flights.filter(
		f =>
			(type === FlightType.All || type === f.type) &&
			flightStopsSearch(search, f)
	);
};

const flightStopsSearch = (search: string, flight: Flight) => {
	const upperCaseSearch = search.toUpperCase();

	if (!search) {
		return true;
	}

	return (
		flight.arrival.toUpperCase().includes(upperCaseSearch) ||
		flight.departure.toUpperCase().includes(upperCaseSearch)
	);
};
