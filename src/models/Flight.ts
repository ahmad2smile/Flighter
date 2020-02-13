import { FlightType } from "./FlightType";

export interface Flight {
	departure: string;
	arrival: string;
	departureTime: number;
	arrivalTime: number;
	durationHours: number;
	type: FlightType;
}
