import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { FlightType } from "../../../models/FlightType";

import { useStyles } from "./styles";

interface IProps {
	search: string;
	type: string;
	onSearch: (search: string) => void;
	onFlightType: (type: FlightType) => void;
}

const Filter = ({ search, type, onSearch, onFlightType }: IProps) => {
	const classes = useStyles();

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		onSearch(event.target.value);
	};

	const handleFlightType = (event: React.ChangeEvent<{ value: any }>) => {
		onFlightType(event.target.value);
	};

	return (
		<div className={classes.root}>
			<TextField
				value={search}
				label="Search"
				onChange={handleSearch}
				className={classes.search}
			/>
			<div className={classes.selectContainer}>
				<InputLabel id="flight-type-filter">Flight Type</InputLabel>
				<Select
					labelId="flight-type-filter"
					value={type}
					onChange={handleFlightType}
				>
					<MenuItem value={FlightType.All}>All</MenuItem>
					<MenuItem value={FlightType.Business}>Business</MenuItem>
					<MenuItem value={FlightType.Cheap}>Cheap</MenuItem>
				</Select>
			</div>
		</div>
	);
};

export default Filter;
