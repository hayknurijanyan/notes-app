import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA6sgi2TM4AG6RekdpeJMpga4E3jGFWtiE",
  authDomain: "notes-app-d4078.firebaseapp.com",
  projectId: "notes-app-d4078",
  storageBucket: "notes-app-d4078.appspot.com",
  messagingSenderId: "585379983823",
  appId: "1:585379983823:web:b85e530355cb6640e722ba",
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // appId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = firebase.auth();

export default app;
