import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

import Dashboard from "../screens/Dashboard/Dashboard";

const FlightForm = React.lazy(() => import("../screens/FlightForm/FlightForm"));

const MainRoute = () => (
	<Router>
		<React.Suspense fallback={<LinearProgress />}>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/create" component={FlightForm} />
			</Switch>
		</React.Suspense>
	</Router>
);

export default MainRoute;
