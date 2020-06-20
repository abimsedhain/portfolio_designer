import React, { useState, useReducer } from 'react';
import './App.css';

// Importing Components
import About from './components/About';
import Home from './components/Home';
import UserDetails from "./components/form/UserDetails"
import Template from "./components/templates/Template"

// Theme and ThemeProvider from styled folder and components
import Theme from "./components/styled/Theme"
import { ThemeProvider } from "styled-components"


//React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import tempUser from './components/utility/tempUser';
import reducer from "./components/utility/reducer"

// importing user context where all the data will be stored
// import { userContext, initialUser } from "./components/utility/userContext"
import { userStateContext, userDispatchContext } from "./components/utility/userContext"

function App() {
	const [state, dispatch] = useReducer(reducer, tempUser)
	return (
		<Router>
			<div className="App">
				<ThemeProvider theme={Theme}>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about" component={About} />
						<userStateContext.Provider value={state}>
							<userDispatchContext.Provider value={dispatch}>
								<Route path="/form" component={UserDetails} />
								<Route path="/template" component={Template} />
							</userDispatchContext.Provider>
						</userStateContext.Provider>
					</Switch>
				</ThemeProvider>
			</div>

		</Router>
	);
}


export default App;
