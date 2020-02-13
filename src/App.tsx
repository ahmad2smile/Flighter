import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./appstate/store/index";

import Dashboard from "./screens/Dashboard/Dashboard";
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
					<Dashboard />
				</div>
			</PersistGate>
		</Provider>
	);
};

export default App;
