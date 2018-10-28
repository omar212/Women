import firebase from "firebase";
import React, {Component} from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import SignIn from './SignIn';

firebase.initializeApp({
  apiKey: "AIzaSyAnu12nINCU2ZRO_2h919Qiu2DLNqfigMY",
  authDomain: "hackattack-e1ab3.firebaseapp.com",
})

class LoginSocial extends Component {
  state = {isSignedIn : false};
  uiConfig = {
    signInFlow : "popup",
    signInOptions:
        [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
    callbacks: {signInSuccess: () => false}
  }

  componentDidMount =
      () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
      }

  render() {
    return (
      <div className="App">
        <h1>Welcome to AMustMovies </h1>
        {this.state.isSignedIn ? (
          <span>
            {/* <Header /> */}
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <SignIn />
            {/* <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            /> */}
          </span>
        ) : (

          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
            style={{position:'center'}}
          />
        )
  }
        </div>
    )
  }
}

export default LoginSocial;
