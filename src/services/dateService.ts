import moment, { Moment, unitOfTime } from "moment";

export const timeFormats = {
	STANDARD: "YYYY-MM-DD",
	HUMAN_READABLE: "ddd, MMM Do"
};

export const getNow = (): moment.Moment => moment();

export const getNowUnix = (): number => moment().unix();

export const unixToMoment = (seconds: number): moment.Moment =>
	moment.unix(seconds);

export const momentToUnix = (date: Moment): number => date.unix();

export const unixToJSDate = (seconds: number): Date =>
	unixToMoment(seconds).toDate();

export const diffUnixTime = (
	secondsB: number,
	secondsA: number,
	resolution: unitOfTime.All = "hours"
): number => {
	if (secondsB === secondsA) {
		return 0;
	}

	return moment(secondsB - secondsA).get(resolution);
};
