import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import SignUp from "./Components/SignUp";
import Bio from './Components/Bio';
import SignIn from "./Components/SignIn";
import firebase from "firebase"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import LoginSocial from "./Components/LoginSocial";

const theme = createMuiTheme({
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            'Montserrat',
            'sans-serif',

        ].join(','),
    },
});

class App extends Component {
  render() {
      return (
          <MuiThemeProvider theme={theme}>
              <BrowserRouter>
        <div className = "App">
          <Route path = "/" exact component = { SignIn } />
          <Route path = "/signup" exact component = { SignUp } />
          <Route path = "/bios" exact component = { Bio } />
          {/* <Route path = "/signin/login" exact component = { LoginSocial } /> */}
        </div>
              </BrowserRouter>
          </MuiThemeProvider>
    );
  }
}

export default App;
