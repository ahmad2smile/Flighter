import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./appstate/store/index";

const onBeforeLift = () => {
	// Trigger before redux-persist has loaded the state from storage
};

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
				<div>App Started</div>
			</PersistGate>
		</Provider>
	);
};

export default App;
