import React from 'react';
import './App.css';

// Importing Components
import About from './components/About';
import Home from './components/Home';
// import Contact from './components/Contact';
// import Login from './components/Login';

// import UserDetails from './Form/UserDetails';
import UserDetails from "./components/form/UserDetails"
import Theme from "./components/styled/Theme"
import { ThemeProvider } from "styled-components"
//React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Template from './components/Template';

function App() {
	return (
		<Router>
			<div className="App">
				<ThemeProvider theme={Theme}>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about" component={About} />
						<Route path="/form" component={UserDetails} />
						{/* <Route path="/template" component={Template}/> */}
					</Switch>
				</ThemeProvider>
			</div>

		</Router>
	);
}


export default App;
