import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from "./Components/SignUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp/>
      </div>
    );
  }
}

export default App;
