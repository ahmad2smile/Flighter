export interface RawBusinessFlight {
	departure: string;
	arrival: string;
	departureTime: number;
	arrivalTime: number;
}

export interface RawCheapFlight {
	route: string;
	departure: number;
	arrival: number;
}
