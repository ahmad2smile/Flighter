import { FlightType } from "./FlightType";

export interface Flight {
	id: number;
	departure: string;
	arrival: string;
	departureTime: number;
	arrivalTime: number;
	durationHours: number;
	type: FlightType;
}
