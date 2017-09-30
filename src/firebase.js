import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBFw6YYq7Qj_gNDihNzzJkgikqdUsJtUDE",
    authDomain: "sign-c2ee8.firebaseapp.com",
    databaseURL: "https://sign-c2ee8.firebaseio.com",
    projectId: "sign-c2ee8",
    storageBucket: "",
    messagingSenderId: "370163081812"
  };

export const firebaseApp = firebase.initializeApp(config);
