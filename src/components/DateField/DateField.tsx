import React from "react";
import { DateTimePicker } from "@material-ui/pickers";
import { WrappedFieldProps } from "redux-form";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import FormHelperText from "@material-ui/core/FormHelperText";
import { unixToJSDate, momentToUnix } from "../../services/dateService";
import { Moment } from "moment";

import { useStyles } from "./styles";

const DateField = (props: WrappedFieldProps) => {
	const classes = useStyles();

	const {
		meta: { submitting, error, touched },
		input: { onBlur, onFocus, value, ...inputProps },
		...others
	} = props;

	const onChange = (date: MaterialUiPickersDate) =>
		inputProps.onChange(momentToUnix(date as Moment));

	return (
		<div className={classes.root}>
			<DateTimePicker
				{...others}
				value={value ? unixToJSDate(value) : null}
				disabled={submitting}
				onBlur={() => onBlur(value)}
				error={error && touched}
				invalidDateMessage={error}
				invalidLabel={error}
				onChange={onChange}
			/>
			{error && touched && <FormHelperText error>{error}</FormHelperText>}
		</div>
	);
};

export default DateField;
