import React, { useReducer, useEffect } from 'react';
import './App.css';

// Importing Components
import Home from './components/Home';
import UserDetails from "./components/form/UserDetails"
import Template from "./components/templates/Template"
import Lost from "./components/Lost"


// Theme and ThemeProvider from styled folder and components
import Theme from "./components/styled/Theme"
import { ThemeProvider } from "styled-components"


//React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Importing tempuser and reducer
import initialState from './state/initialState';
import reducer from "./state management/reducer"

// Importing user context where all the data will be stored
import { userStateContext, userDispatchContext } from "./state management/userContext"
import Authenticate from './components/authentication/Authenticate';
import types from './state management/types';
import { fetchAwt } from "./utility/authenticate"


function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		//refreshs access token on refresh
		try {
			fetchAwt().then(async data => {
				data = await data.json()
				if (data.awt) {
					dispatch({ type: types.SET_USER, payload: data.awt })
				}
			})
		} catch (error) {
			dispatch({ type: types.REMOVE_USER })
		} 

	}, [])


	return (
		<Router>
				<div className="App">
					<ThemeProvider theme={Theme}>

						<userStateContext.Provider value={state}>
							<userDispatchContext.Provider value={dispatch}>
								<Switch>
									<Route path="/" exact component={Home} />
									<Route path="/authenticate" component={Authenticate} />
									<Route path="/form" component={UserDetails} />
									<Route path="/template" component={Template} />
									<Route path="/template" component={Template} />
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
