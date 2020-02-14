import React from "react";
import { DateTimePicker } from "@material-ui/pickers";
import { WrappedFieldProps } from "redux-form";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

const DateField = (props: WrappedFieldProps) => {
	const {
		meta: { submitting, error, touched },
		input: { onBlur, value, ...inputProps },
		...others
	} = props;

	const onChange = (date: MaterialUiPickersDate) => {
		inputProps.onChange(date);
	};

	return (
		<DateTimePicker
			{...inputProps}
			{...others}
			value={value ? new Date(value) : null}
			disabled={submitting}
			onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
			error={error && touched}
			onChange={onChange}
		/>
	);
};

export default DateField;
