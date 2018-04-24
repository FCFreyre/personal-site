import React, { Component } from 'react';
import '../App.css';

export default class Header extends Component {
  render() {
    return(
      <div className= 'page-header'>
        <h1>This is the header</h1>
        <h3>We may turn this into a nav bar, but lets see how we style it first</h3>
      </div>
    )
  }
}
