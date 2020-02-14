import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
			flexWrap: "wrap",
			maxWidth: 1100,
			margin: "0 auto",
			"& >div": {
				minWidth: `calc(100% - ${2 * theme.spacing(2)}px)`,
				margin: theme.spacing(2)
			}
		}
	})
);
