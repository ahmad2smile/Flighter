import React, { useEffect } from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { Moment } from "moment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { FlightType } from "../../../models/FlightType";

import FieldWrapper from "../../../components/FieldWrapper/FieldWrapper";
import DateField from "../../../components/DateField/DateField";

import { getNow } from "../../../services/dateService";

import { useStyles } from "./styles";

export interface FormValues {
	departure: string;
	arrival: string;
	departureTime: Moment;
	arrivalTime: Moment;
	type: string;
}

interface IProps extends InjectedFormProps<FormValues> {}

const Form = (props: IProps) => {
	const classes = useStyles();
	const { handleSubmit, initialize } = props;

	useEffect(() => {
		initialize({
			departureTime: getNow(),
			arrivalTime: getNow(),
			type: FlightType.Business
		});
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
				{renderProps => (
					<FormControl>
						<InputLabel id="flight-type">Flight Type</InputLabel>
						<Select labelId="flight-type" {...renderProps}>
							<MenuItem value={FlightType.Business}>
								Business
							</MenuItem>
							<MenuItem value={FlightType.Cheap}>Cheap</MenuItem>
						</Select>
					</FormControl>
				)}
			</FieldWrapper>
			<Button type="submit" variant="outlined" color="primary">
				Submit
			</Button>
		</form>
	);
};

export default reduxForm<FormValues>({
	form: "flightForm"
})(Form);
