import React, { useEffect } from "react";
import { connect, DispatchProp } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormHelperText from "@material-ui/core/FormHelperText";

import { IState } from "../../appstate/IState";
import { FlightState } from "../../appstate/reducers/flights/flightReducer";
import {
	flightsGetRequest,
	flightsFilterAction,
	flightsGetClearError
} from "../../appstate/actions/flights/flightGetActions";

import FlightCard from "./FlightCard/FlightCard";

import { useStyles } from "./styles";
import Filter from "./Filter/Filter";

import { FlightType } from "../../models/FlightType";
import { RequestTypes } from "../../appstate/sagas/RequestTypes";
import { useParamsFilter } from "./utils/paramsFilterHook";

interface IProps extends DispatchProp, FlightState {}

const Dashboard = (props: IProps) => {
	const classes = useStyles();
	const [paramsFilter, setParamsFilter] = useParamsFilter();

	const {
		flights,
		filter: { search, type },
		flightRequestError,
		flightRequestState,
		dispatch
	} = props;

	const loading =
		!flightRequestError && flightRequestState === RequestTypes.REQUESTED;

	const error = flightRequestError && !loading;

	useEffect(() => {
		dispatch(flightsGetRequest());
		dispatch(flightsFilterAction(paramsFilter)); // Local state filter only

		return () => {
			dispatch(flightsGetClearError()); // Clean up
		};
	}, []);

	const handleSearch = (_search: string) => {
		const filter = { search: _search, type };

		setParamsFilter(filter);
		dispatch(flightsFilterAction(filter));
	};

	const handleFlightType = (_flightType: FlightType) => {
		const filter = { search, type: _flightType };

		setParamsFilter(filter);
		dispatch(flightsFilterAction(filter));
	};

	return (
		<div>
			<div className={classes.header}>
				<Typography variant="h5">Flights</Typography>
				<Link to="/create" className={classes.createLink}>
					Create
				</Link>
			</div>
			<Filter
				search={search}
				onSearch={handleSearch}
				type={type}
				onFlightType={handleFlightType}
			/>
			{error && (
				<div className={classes.error}>
					<FormHelperText error>{flightRequestError}</FormHelperText>
				</div>
			)}
			<Grid container className={classes.root}>
				<Grid container item xs={12} className={classes.flights}>
					{flights.map((f, i) => (
						<FlightCard key={i} flight={f} />
					))}
				</Grid>
			</Grid>
		</div>
	);
};

export default connect(
	({
		flightState: { flights, filter, flightRequestError, flightRequestState }
	}: IState) => ({
		flights,
		filter,
		flightRequestError,
		flightRequestState
	})
)(Dashboard);
