import {
	RawCheapFlight,
	RawBusinessFlight
} from "../../../../models/RawFlight";
import { formatFlights } from "./formatFlights";
import { FlightType } from "../../../../models/FlightType";

describe("Formats Flights correctly", () => {
	const businessFlights: ReadonlyArray<RawBusinessFlight> = [
		{
			arrival: "city1",
			arrivalTime: 12345,
			departure: "city2",
			departureTime: 6789
		},
		{
			arrival: "city3",
			arrivalTime: 12345,
			departure: "city4",
			departureTime: 6789
		}
	];

	const cheapFlights: ReadonlyArray<RawCheapFlight> = [
		{
			route: "city6-city5",
			arrival: 12345,
			departure: 6789
		},
		{
			route: "city8-city7",
			arrival: 12345,
			departure: 6789
		}
	];

	test("when Business flights", () => {
		const formattedFlights = businessFlights.map(
			formatFlights(FlightType.Business)
		);

		expect(formattedFlights.length).toBe(2);
		expect(formattedFlights[1].type).toBe(FlightType.Business);
	});

	test("when Cheap flights", () => {
		const formattedFlights = cheapFlights.map(
			formatFlights(FlightType.Cheap)
		);

		expect(formattedFlights.length).toBe(2);
		expect(formattedFlights[1].type).toBe(FlightType.Cheap);
	});
});
