import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "../screens/Dashboard/Dashboard";

const FlightForm = React.lazy(() => import("../screens/FlightForm/FlightForm"));

const MainRoute = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Dashboard} />
			<Route exact path="/create" component={FlightForm} />
		</Switch>
	</Router>
);

export default MainRoute;
