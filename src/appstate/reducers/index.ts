import { persistCombineReducers } from "redux-persist";
import { reducer as formReducer } from "redux-form";
import storage from "redux-persist/lib/storage";

import { flightsReducer as flightState } from "./flights/flightReducer";

// Setup for Redux Persist
export default persistCombineReducers(
	{
		key: "root",
		storage,
		blacklist: ["form"]
	},
	{
		form: formReducer,
		flightState
	}
);
