import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import { store, persistor } from "./appstate/store/index";

import MainRoute from "./routes";

import { useStyles } from "./App.styles";

const onBeforeLift = () => {
	// Trigger before redux-persist has loaded the state from storage
};

const App = () => {
	const classes = useStyles();

	return (
		<Provider store={store}>
			<PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
				<div className={classes.root}>
					<MuiPickersUtilsProvider utils={MomentUtils}>
						<MainRoute />
					</MuiPickersUtilsProvider>
				</div>
			</PersistGate>
		</Provider>
	);
};

export default App;
