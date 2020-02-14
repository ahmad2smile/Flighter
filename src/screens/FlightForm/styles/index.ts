import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	header: {
		display: "flex",
		justifyContent: "space-between"
	},
	createLink: {
		...theme.typography.h5
	},
	flights: {
		display: "flex",
		justifyContent: "center"
	}
}));
