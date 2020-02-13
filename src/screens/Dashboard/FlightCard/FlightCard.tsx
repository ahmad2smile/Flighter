import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { Flight } from "../../../models/Flight";

import { useStyles } from "./styles";
import { unixToMoment, timeFormats } from "../../../services/dateService";

interface IProps {
	flight: Flight;
}

const FlightCard = (props: IProps) => {
	const classes = useStyles();

	const { flight } = props;

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography gutterBottom variant="h6">
					{flight.durationHours} hrs
				</Typography>
				<Typography variant="h6">{flight.departure}</Typography>
				<Typography component="p" color="textSecondary">
					to
				</Typography>
				<Typography variant="h6">{flight.arrival}</Typography>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					{unixToMoment(flight.departureTime).format(
						timeFormats.HUMAN_READABLE
					)}
				</Typography>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					{flight.type}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default FlightCard;
