import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import Sidenav from './components/layout/sidenav/Sidenav';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidenav />
      </>
    );
  }
}

export default App;
