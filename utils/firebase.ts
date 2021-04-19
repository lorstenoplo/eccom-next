import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN2dh9AN6eKWKCyvvyzUDYlC6Ff8ijf6Y",
  authDomain: "goloop-storage.firebaseapp.com",
  projectId: "goloop-storage",
  storageBucket: "goloop-storage.appspot.com",
  messagingSenderId: "110336323258",
  appId: "1:110336323258:web:7eabdbf93ee61422031c83",
  measurementId: "G-56YXTCLP66",
};

let firebaseApp;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app(); // if already initialized, use that one
}

const db = firebaseApp.firestore();
const storage = firebase.storage();

export { db, storage };
