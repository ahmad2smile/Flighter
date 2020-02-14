import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Form from "./Form/Form";

import { useStyles } from "./styles";

interface IProps {}

const FlightForm = (props: IProps) => {
	const classes = useStyles();

	const handleSubmit = (s: any) => console.log(s);

	return (
		<div>
			<div className={classes.header}>
				<Typography variant="h5">Create</Typography>
				<Link to="/" className={classes.createLink}>
					Dashboard
				</Link>
			</div>
			<Form onSubmit={handleSubmit} />
		</div>
	);
};

export default FlightForm;
