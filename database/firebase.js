import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCeF1_h6DoVMCseokPAHnihJWBLIcGEhfw",
  authDomain: "react-77997.firebaseapp.com",
  databaseURL: "https://react-77997.firebaseio.com",
  projectId: "react-77997",
  storageBucket: "react-77997.appspot.com",
  messagingSenderId: "305948652714",
  appId: "1:305948652714:web:a2da7709eb7b105bc70cd3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
