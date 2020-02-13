import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			minWidth: 275,
			margin: theme.spacing(1)
		},
		bullet: {
			display: "inline-block",
			margin: "0 2px",
			transform: "scale(0.8)"
		},
		title: {
			fontSize: 14
		}
	})
);
