import React, { useEffect } from "react";
import { connect, DispatchProp } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { IState } from "../../appstate/IState";
import { FlightState } from "../../appstate/reducers/flights/flightReducer";
import { flightsGetRequest } from "../../appstate/actions/flights/flightActions";

import FlightCard from "./FlightCard/FlightCard";

import { useStyles } from "./styles";

interface IProps extends DispatchProp {
	flightState: FlightState;
}

const Dashboard = (props: IProps) => {
	const classes = useStyles();

	const { flightState, dispatch } = props;
	const { flights } = flightState;

	useEffect(() => {
		dispatch(flightsGetRequest());
	}, [dispatch]);

	return (
		<div>
			<Typography variant="h5">Flights</Typography>
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

export default connect(({ flightState }: IState) => ({
	flightState
}))(Dashboard);
