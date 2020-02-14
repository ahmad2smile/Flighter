import React, { useEffect } from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import CircularProgress from "@material-ui/core/CircularProgress";

import { FlightType } from "../../../models/FlightType";

import FieldWrapper from "../../../components/FieldWrapper/FieldWrapper";
import DateField from "../../../components/DateField/DateField";

import { getNowUnix } from "../../../services/dateService";

import { Flight } from "../../../models/Flight";
import { validateFlightForm } from "../../../services/validationService";

import { RequestTypes } from "../../../appstate/sagas/RequestTypes";

import { useStyles } from "./styles";

interface IProps extends InjectedFormProps<Flight> {
	requestError: string;
	requestState: RequestTypes;
}

const Form = (props: IProps) => {
	const classes = useStyles();
	const { handleSubmit, initialize, requestError, requestState } = props;

	const loading = !requestError && requestState === RequestTypes.REQUESTED;

	const error = requestError && !loading;

	useEffect(() => {
		initialize({
			departureTime: getNowUnix(),
			arrivalTime: getNowUnix(),
			type: FlightType.Business
		});
		// eslint-disable-next-line
	}, []);

	return (
		<form onSubmit={handleSubmit} className={classes.root}>
			<FieldWrapper name="departure">
				{renderProps => (
					<TextField label="Departure" type="text" {...renderProps} />
				)}
			</FieldWrapper>
			<FieldWrapper name="arrival">
				{renderProps => (
					<TextField label="Arrival" type="text" {...renderProps} />
				)}
			</FieldWrapper>
			<Field
				name="departureTime"
				label="Departure At"
				showTodayButton
				disablePast
				component={DateField}
			/>
			<Field
				name="arrivalTime"
				label="Arrival At"
				showTodayButton
				disablePast
				component={DateField}
			/>
			<FieldWrapper name="type">
				{({ helperText, ...rest }) => (
					<FormControl>
						<InputLabel id="flight-type">Flight Type</InputLabel>
						<Select labelId="flight-type" {...rest}>
							<MenuItem value={FlightType.Business}>
								Business
							</MenuItem>
							<MenuItem value={FlightType.Cheap}>Cheap</MenuItem>
						</Select>
					</FormControl>
				)}
			</FieldWrapper>
			{error && (
				<div>
					<FormHelperText error>{requestError}</FormHelperText>
				</div>
			)}
			<Button
				disabled={loading}
				type="submit"
				variant="outlined"
				color="primary"
			>
				{loading ? <CircularProgress size={20} /> : "Submit"}
			</Button>
		</form>
	);
};

export default reduxForm<Flight, Pick<IProps, "requestError" | "requestState">>(
	{
		form: "flightForm",
		validate: validateFlightForm
	}
)(Form);
