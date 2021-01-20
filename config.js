import firebase from "firebase/app" 
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD1zSVibXY2u1qSP-hOQ5IsSIgU-hGNEe8",
    authDomain: "wireless-library-16936.firebaseapp.com",
    projectId: "wireless-library-16936",
    storageBucket: "wireless-library-16936.appspot.com",
    messagingSenderId: "71835878785",
    appId: "1:71835878785:web:357e32b3398ba262e49480"
  };

  if (!firebase.apps.length)
  { firebase.initializeApp(firebaseConfig) } 
  export const auth = firebase.auth()
