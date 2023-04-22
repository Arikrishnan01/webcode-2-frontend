// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz8vJuIthxUuRjmKa6RvG8OI5cKNZ3Ak4",
  authDomain: "stackoverflow-25a9d.firebaseapp.com",
  projectId: "stackoverflow-25a9d",
  storageBucket: "stackoverflow-25a9d.appspot.com",
  messagingSenderId: "627553472897",
  appId: "1:627553472897:web:716f6a143c73bb062a5880",
  measurementId: "G-YY9S5PM3TS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();