import React from "react";
import { Route } from "react-router-dom";
import GoogleAuthentication from "./GoogleAuthentication";

//Base authentication route
//Routes to different authentication strategy
const Authenticate = ({ match }) => {
	return (
		<>
			<Route
				path={`${match.path}/google`}
				component={GoogleAuthentication}
			/>
		</>
	);
};

export default Authenticate;

