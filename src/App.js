import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <h1>Coulter Freyre</h1>
        <h2>Developer Extraordinaire</h2>
      </div>
    );
  }
}

export default App;
