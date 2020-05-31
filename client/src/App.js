import React from 'react';
import './App.css';

// Importing Components
import About from './components/About'; 
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';

//Importing Navbar
import AppNavbar from './Navbar/AppNavbar';
import AppFooter from './Navbar/AppFooter';
import TestFooter from './Navbar/TestFooter';
// import Jumbotronn from './components/Jumbotronn';

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
      </Switch>
    </div>
  </Router>
  );
}

export default App;
