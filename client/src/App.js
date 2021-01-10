import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import Sidenav from './components/layout/sidenav/Sidenav';
import Buildings from './components/pages/buildings/Buildings.jsx';
import Companies from './components/pages/companies/Companies.jsx';
import Boilers from './components/pages/boilers/Boilers.jsx';
import Technicians from './components/pages/Technicians';
import BoilerTypes from './components/pages/Boiler-types/BoilerTypes.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './components/pages/log-in/logIn';

const App = () => {
  const [log, setLog] = useState(true);
  
  if (log) {
    return (
      <Router>
        <div className="App">
          <Header />
          <Sidenav />
          <Switch>
            <Route path="/companies" exact component={Companies} />
            <Route path="/buildings" exact component={Buildings} />
            <Route path="/boilers" exact component={Boilers} />
            <Route path="/technicians" exact component={Technicians} />
            <Route path="/boiler-types" exact component={BoilerTypes} />
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <LogIn />
    );
  }
};

export default App;
