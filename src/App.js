import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import SignUp from "./Components/SignUp";
import Bio from './Components/Bio';
import SignIn from "./Components/SignIn";
import Ask from "./Components/Ask";
import Question from "./Components/Questions";
// import LoginSocial from "./Components/LoginSocial";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = "App">
          <Route path = "/" exact component = { SignIn } />
          <Route path = "/signup" exact component = { SignUp } />
          <Route path = "/bios" exact component = { Bio } />
          <Route path = "/bios/ask" exact component = { Ask } />
          <Route path = "/bios/ask/question" exact component = { Question } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
