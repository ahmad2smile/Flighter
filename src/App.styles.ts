import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {},
		"@global": {
			body: {
				backgroundColor: "#f1f1f1"
			}
		}
	})
);
