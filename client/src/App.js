import React from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import Sidenav from './components/layout/sidenav/Sidenav';
import Buildings from './components/pages/Buildings';
import Companies from './components/pages/Companies';
import Boilers from './components/pages/boilers/Boilers.jsx';
import Technicians from './components/pages/Technicians';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Sidenav />
          <Switch>
            <Route path="/companies" exact component={Companies} />
            <Route path="/buildings" exact component={Buildings} />
            <Route path="/boilers" exact component={Boilers} />
            <Route path="/technicians" exact component={Technicians} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
