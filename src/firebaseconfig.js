import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYjOPQb9H1yQtxSi8QRmtCjiBVBfxuT5s",
    authDomain: "ucafe-af6d5.firebaseapp.com",
    projectId: "ucafe-af6d5",
    storageBucket: "ucafe-af6d5.appspot.com",
    messagingSenderId: "1054290180087",
    appId: "1:1054290180087:web:1e0a1cebbb9c09402320f2",
    measurementId: "G-78LTBDVXR9"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const googleLogin = new firebase.auth.GoogleAuthProvider();
  export const facebookLogin = new firebase.auth.FacebookAuthProvider();



