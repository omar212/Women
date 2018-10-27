import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from "./Components/SignUp";
import Template from './Components/Template';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp/>
        <Template/>
      </div>
    );
  }
}

export default App;
