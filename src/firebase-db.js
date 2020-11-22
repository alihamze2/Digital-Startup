import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyBn09xCLC51WFQfIpPemmOcIXcHuk41UIo",
    authDomain: "alifire.firebaseapp.com",
    databaseURL: "https://alifire.firebaseio.com",
    projectId: "alifire",
    storageBucket: "alifire.appspot.com",
    messagingSenderId: "1059976169572",
    appId: "1:1059976169572:web:3a220ab00f17a48d61b771"
  })
  .firestore();

export const postRef = db.collection("posts");
