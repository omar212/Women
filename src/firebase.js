var firebase = require("firebase");

const config = {
    apiKey: "AIzaSyDkeEf4K1hP3ztouFpCqzpBccWRUCAYuVw",
    authDomain: "iamwomen-f2f09.firebaseapp.com",
    databaseURL: "https://iamwomen-f2f09.firebaseio.com",
    projectId: "iamwomen-f2f09",
    storageBucket: "iamwomen-f2f09.appspot.com",
    messagingSenderId: "149618393075"
};
firebase.initializeApp(config);

export default (firebase);