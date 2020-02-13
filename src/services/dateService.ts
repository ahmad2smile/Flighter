import moment from "moment";

export const timeFormats = {
	STANDARD: "YYYY-MM-DD",
	HUMAN_READABLE: "ddd, MMM Do"
};

export const getNow = (): moment.Moment => moment();

export const unixToMoment = (seconds: number): moment.Moment =>
	moment.unix(seconds);

export const diffTimeToHours = (secondsB: number, secondsA: number): number => {
	if (secondsB === secondsA) {
		return 0;
	}

	return moment(secondsB - secondsA).hours();
};
