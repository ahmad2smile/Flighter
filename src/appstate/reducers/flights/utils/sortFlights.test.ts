import { FlightType } from "../../../../models/FlightType";
import { Flight } from "../../../../models/Flight";
import { sortFlights } from "./sortFlights";
import { FlightSort } from "../../../../models/FlightSort";

describe("Sorts Flights correctly", () => {
	const flights: ReadonlyArray<Flight> = [
		{
			arrival: "city1",
			arrivalTime: 12345,
			departure: "city2",
			departureTime: 6789,
			durationHours: 3,
			type: FlightType.Business
		},
		{
			arrival: "city3",
			arrivalTime: 12345,
			departure: "city4",
			departureTime: 6789,
			durationHours: 2,
			type: FlightType.Cheap
		},
		{
			arrival: "city5",
			arrivalTime: 12345,
			departure: "city6",
			departureTime: 6789,
			durationHours: 1,
			type: FlightType.Cheap
		}
	];

	test("defaults sort shortest first", () => {
		const sortedFlights = sortFlights(flights);

		expect(sortedFlights.length).toBe(3);
		expect(sortedFlights[0].durationHours).toBe(1);
		expect(sortedFlights[1].durationHours).toBe(2);
		expect(sortedFlights[2].durationHours).toBe(3);
	});

	test("defaults sort longest first", () => {
		const sortedFlights = sortFlights(flights, FlightSort.Long);

		expect(sortedFlights.length).toBe(3);
		expect(sortedFlights[0].durationHours).toBe(3);
		expect(sortedFlights[1].durationHours).toBe(2);
		expect(sortedFlights[2].durationHours).toBe(1);
	});
});
