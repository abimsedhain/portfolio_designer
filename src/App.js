import React from 'react';
import './App.css';

// Importing Components
import About from './components/About'; 
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';

import ModalExample from './Form/ModalExample';

import UserDetails from './Form/UserDetails';

//React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/form" component={UserDetails} />
        <Route path="/modal" component={ModalExample} />
      </Switch>
    </div>

  </Router>
  );
}

export default App;
