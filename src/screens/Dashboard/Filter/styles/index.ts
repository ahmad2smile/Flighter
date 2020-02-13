import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
			width: "90%",
			margin: "0 auto",
			flexWrap: "wrap"
		},
		search: {
			flexGrow: 3
		},
		selectContainer: {
			flexGrow: 1,
			"& div": {
				width: "100%"
			}
		}
	})
);
