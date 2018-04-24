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
      <div className="App" id="page-wrap">
        <nav>
          <a id="my-name">Fernando Coulter Freyre de Andrade XV</a>

          <div className="links">
            <ActiveLink activeOnlyWhenExact to="/Projects" label="Projects" />
            <ActiveLink activeOnlyWhenExact to="/About" label="About" />
            <ActiveLink activeOnlyWhenExact to="/Contact" label="Contact" />
            <ActiveLink activeOnlyWhenExact to="/Header" label="Header" />
          </div>
        </nav>

      {/* components render here under class "page-header" */}


      </div>
    );
  }
}

console.log("You've found the console, well done! If you'd like to see my code, check out github.com/FCFreyre")

export default App;
