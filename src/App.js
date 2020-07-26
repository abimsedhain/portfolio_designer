import React, { useReducer, useEffect } from "react";
import "./App.css";

// Importing Components
import Home from "./components/Home";
import Form from "./components/Form";
import Template from "./components/templates/Template";
import Lost from "./components/Lost";
import Portfolio from "./components/Portfolio";
import Authenticate from "./components/authentication/Authenticate";
import Dashboard from "./components/dashboard/Dashboard";
import { ClipPathBackground } from "./components/styled/StyledContainers";

// Theme and ThemeProvider from styled folder and components
import Theme from "./components/styled/Theme";
import { ThemeProvider } from "styled-components";

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing tempuser and reducer
import initialState from "./state/initialState";
import reducer from "./state management/reducer";

// Importing user context where all the data will be stored
import {
	userStateContext,
	userDispatchContext,
} from "./state management/userContext";
import types from "./state management/types";

// Importing utility function for checking authentication
import { fetchAwt } from "./utility/authenticate";

function App() {
	//creating a reducer from initial state and reducer
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		//access token is stored in local memory
		//it needs to be refreshed every time page is reloaded
		//the useEffect hook refreshs access token on reload
		try {
			fetchAwt().then(async (data) => {
				data = await data.json();
				if (data.awt) {
					//setting the user using dispatch
					dispatch({ type: types.SET_USER, payload: data.awt });
				}
			});
		} catch (error) {
			//removing the user if there is an error
			dispatch({ type: types.REMOVE_USER });
		}
	}, []);

	return (
		<Router>
			<div className="App">
				{/**providing theme for styled components**/}
				<ThemeProvider theme={Theme}>
					{/**Provding state and dispatch context**/}
					<userStateContext.Provider value={state}>
						<userDispatchContext.Provider value={dispatch}>
							<ClipPathBackground
								Secondary
								Opacity="100%"
								Index="-3"
							/>
							<Switch>
								<Route path="/" exact component={Home} />
								<Route
									path="/authenticate"
									component={Authenticate}
								/>
								<Route path="/form" component={Form} />
								<Route path="/template" component={Template} />
								<Route
									path="/portfolio"
									component={Portfolio}
								/>
								<Route
									path="/dashboard"
									component={Dashboard}
								/>
								{/**Shows 404 if no route is matched**/}
								<Route component={Lost} />
							</Switch>
						</userDispatchContext.Provider>
					</userStateContext.Provider>
				</ThemeProvider>
			</div>
		</Router>
	);
}

export default App;
