import { filterFlights } from "./filterFlights";
import { FlightType } from "../../../../models/FlightType";
import { Flight } from "../../../../models/Flight";

describe("Filters Flights correctly", () => {
	const flights: ReadonlyArray<Flight> = [
		{
			arrival: "city1",
			arrivalTime: 12345,
			departure: "city2",
			departureTime: 6789,
			durationHours: 2,
			type: FlightType.Business
		},
		{
			arrival: "city3",
			arrivalTime: 12345,
			departure: "city4",
			departureTime: 6789,
			durationHours: 2,
			type: FlightType.Cheap
		}
	];

	test("when search empty return all", () => {
		const filter = {
			search: "",
			type: FlightType.All
		};

		const filteredFlights = filterFlights(filter, flights);

		expect(filteredFlights.length).toBe(2);
	});

	test("when search for specific city return results only for that", () => {
		const filter = {
			search: "city3",
			type: FlightType.All
		};

		const filteredFlights = filterFlights(filter, flights);

		expect(filteredFlights.length).toBe(1);
		expect(filteredFlights[0].arrival).toBe(filter.search);
	});

	test("when search for business return results only for business", () => {
		const filter = {
			search: "",
			type: FlightType.Business
		};

		const filteredFlights = filterFlights(filter, flights);

		expect(filteredFlights.length).toBe(1);
		expect(filteredFlights[0].type).toBe(FlightType.Business);
	});

	test("when search for business and specific city return exact results", () => {
		const filter = {
			search: "city1",
			type: FlightType.Business
		};

		const filteredFlights = filterFlights(filter, flights);

		expect(filteredFlights.length).toBe(1);
		expect(filteredFlights[0].type).toBe(FlightType.Business);
	});

	test("when search for business and unavailable city for that class return No results", () => {
		const filter = {
			search: "city3",
			type: FlightType.Business
		};

		const filteredFlights = filterFlights(filter, flights);

		expect(filteredFlights.length).toBe(0);
	});

	test("when search for cheap return results only for cheap", () => {
		const filter = {
			search: "",
			type: FlightType.Cheap
		};

		const filteredFlights = filterFlights(filter, flights);

		expect(filteredFlights.length).toBe(1);
		expect(filteredFlights[0].type).toBe(FlightType.Cheap);
	});

	test("when search for cheap and specific city return exact results", () => {
		const filter = {
			search: "city3",
			type: FlightType.Cheap
		};

		const filteredFlights = filterFlights(filter, flights);

		expect(filteredFlights.length).toBe(1);
		expect(filteredFlights[0].type).toBe(FlightType.Cheap);
	});

	test("when search for cheap and unavailable city for that class returns No results", () => {
		const filter = {
			search: "city1",
			type: FlightType.Cheap
		};

		const filteredFlights = filterFlights(filter, flights);

		expect(filteredFlights.length).toBe(0);
	});

	test("when search for unknown city returns No results", () => {
		const filter = {
			search: "city10",
			type: FlightType.All
		};

		const filteredFlights = filterFlights(filter, flights);

		expect(filteredFlights.length).toBe(0);
	});
});
