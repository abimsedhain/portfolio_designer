import React, { useReducer, useEffect } from 'react';
import './App.css';

// Importing Components
import Home from './components/Home';
import UserDetails from "./components/form/UserDetails"
import Template from "./components/templates/Template"

// Theme and ThemeProvider from styled folder and components
import Theme from "./components/styled/Theme"
import { ThemeProvider } from "styled-components"


//React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// importing tempuser and reducer
import initialState from './state/initialState';
import reducer from "./state management/reducer"

// importing user context where all the data will be stored
import { userStateContext, userDispatchContext } from "./state management/userContext"
import Authenticate from './components/authentication/Authenticate';
import types from './state management/types';


function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	useEffect(() => {
		try {
			fetch(`${process.env.REACT_APP_BACKEND_URL}/user/refresh_token`, {
				method: "GET",
				credentials: "include",
			}).then(async data => {
				data = await data.json()
				if (data.awt) {
					dispatch({ type: types.SET_USER, payload: data.awt })
				}
			})
		}catch(error){
			dispatch({type: types.REMOVE_USER})
		}

	}, [])
	return (
		<Router>
			<div className="App">
				<ThemeProvider theme={Theme}>
					<Switch>
						<userStateContext.Provider value={state}>
							<userDispatchContext.Provider value={dispatch}>
								<Route path="/" exact component={Home} />
								<Route path="/authenticate" component={Authenticate} />
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
