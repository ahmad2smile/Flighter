import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";

import Form from "./Form/Form";

import { useStyles } from "./styles";
import { connect, DispatchProp } from "react-redux";
import { IState } from "../../appstate/IState";
import {
	flightsCreateRequest,
	flightsCreateClearError
} from "../../appstate/actions/flights/flightCreateActions";
import { Flight } from "../../models/Flight";
import { diffUnixTime } from "../../services/dateService";
import { getUniqueKey } from "../../utils/uniqueKeyGenerator";
import { FlightState } from "../../appstate/reducers/flights/flightReducer";
import { RequestTypes } from "../../appstate/sagas/RequestTypes";

interface IProps extends DispatchProp, FlightState {}

const FlightForm = (props: IProps) => {
	const classes = useStyles();
	const {
		dispatch,
		flightCreateRequestState,
		flightCreateRequestError
	} = props;

	const history = useHistory();

	if (flightCreateRequestState === RequestTypes.SUCCESS) {
		history.push("/");
	}

	useEffect(() => {
		return () => {
			dispatch(flightsCreateClearError()); // Clean up
		};
		// eslint-disable-next-line
	}, []);

	const handleSubmit = (flight: Flight) => {
		const { departureTime, arrivalTime } = flight;

		dispatch(
			flightsCreateRequest({
				...flight,
				id: getUniqueKey(),
				durationHours: diffUnixTime(departureTime, arrivalTime)
			})
		);
	};

	return (
		<div>
			<div className={classes.header}>
				<Typography variant="h5">Create</Typography>
				<Link to="/" className={classes.createLink}>
					Dashboard
				</Link>
			</div>
			<Form
				requestState={flightCreateRequestState}
				requestError={flightCreateRequestError}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};

export default connect(
	({
		flightState: { flightCreateRequestState, flightCreateRequestError }
	}: IState) => ({
		flightCreateRequestState,
		flightCreateRequestError
	})
)(FlightForm);
