import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ThemeProvider } from "@material-ui/core/styles";

import { store, persistor } from "./appstate/store/index";

import MainRoute from "./routes";

import { useStyles } from "./App.styles";

import { theme } from "./utils/theme";

const onBeforeLift = () => {
	// Trigger before redux-persist has loaded the state from storage
};

const App = () => {
	const classes = useStyles();

	return (
		<Provider store={store}>
			<PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
				<ThemeProvider theme={theme}>
					<Suspense fallback={<LinearProgress />}>
						<div className={classes.root}>
							<MuiPickersUtilsProvider utils={MomentUtils}>
								<MainRoute />
							</MuiPickersUtilsProvider>
						</div>
					</Suspense>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
