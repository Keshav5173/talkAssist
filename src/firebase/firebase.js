// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6oRrH8YGvICrNXpyEkpPV0FuGGFJbGvY",
  authDomain: "talkassist-f30c6.firebaseapp.com",
  databaseURL: "https://talkassist-f30c6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "talkassist-f30c6",
  storageBucket: "talkassist-f30c6.firebasestorage.app",
  messagingSenderId: "163284261081",
  appId: "1:163284261081:web:882b7ce6c2af2b56d786c8",
  measurementId: "G-XR2K155TZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
