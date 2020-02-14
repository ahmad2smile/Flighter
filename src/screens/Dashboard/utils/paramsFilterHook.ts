import { useHistory } from "react-router-dom";
import { FlightFilter } from "../../../models/FlightFilter";
import { FlightType } from "../../../models/FlightType";

export const useParamsFilter = (): [
	FlightFilter,
	(filter: FlightFilter) => void
] => {
	const { location, push } = useHistory();
	const params = new URLSearchParams(location.search);

	const searchParamName = "search";
	const search = params.get(searchParamName) || "";

	const typeParamName = "type";
	const type = (params.get(typeParamName) as FlightType) || FlightType.All;

	const setParamsFilter = (filter: FlightFilter) => {
		const { search: newSearch, type: newType } = filter;

		newSearch
			? params.set(searchParamName, newSearch)
			: params.delete(searchParamName);

		newType !== FlightType.All
			? params.set(typeParamName, newType)
			: params.delete(typeParamName);

		push({
			pathname: "/",
			search: params.toString()
		});
	};

	return [{ search, type }, setParamsFilter];
};
