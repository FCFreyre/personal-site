import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link
} from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Contact from './components/Contact'
import Projects from './components/Projects'


const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="page-wrap">
          <h1>F. Coulter Freyre</h1>
          <h2>Developer Extraordinaire</h2>

          <About />

          <div className="">
              <ActiveLink activeOnlyWhenExact to="/Contact" label="Contact" />
              <br/>
              <ActiveLink activeOnlyWhenExact to="/Header" label="Header" />
              <br/>
              <ActiveLink activeOnlyWhenExact to="/Projects" label="Projects" />
          </div>
        </div>

        //components render here under class "page-header"

      </div>
    );
  }
}

export default App;
