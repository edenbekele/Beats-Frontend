// NOTE: import only the Firebase modules that you need in your app... except
// for the second line, which makes both the linter and react-firebase happy
import firebase from "firebase/app";
import "firebase/firestore";

// Initalize Firebase.
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4qNOEczkKO1bdj3LvvWLyvzd0RxD-2oA",
  authDomain: "producer-beats.firebaseapp.com",
  databaseURL: "https://producer-beats.firebaseio.com",
  projectId: "producer-beats",
  storageBucket: "producer-beats.appspot.com",
  messagingSenderId: "983585076088",
  appId: "1:983585076088:web:94ea1e4b3d228184cb0e8d",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;
