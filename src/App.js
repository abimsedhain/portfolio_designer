import React from 'react';
import './App.css';

// Importing Components
import About from './components/About'; 
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';

import UserDetails from './Form/UserDetails';

//Importing Navbar
import AppNavbar from './Navbar/AppNavbar';
import AppFooter from './Navbar/AppFooter';


//React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
    <div className="App">
      <AppNavbar/>
      {/* <Jumbotronn/> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/form" component={UserDetails} />
      </Switch>
    </div>

  </Router>
  );
}

export default App;