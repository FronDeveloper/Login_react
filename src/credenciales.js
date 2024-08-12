// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFl_Y6FN45-BKdLEPIUVfRfyZi5IIgrhc",
  authDomain: "registro-login-react-84707.firebaseapp.com",
  projectId: "registro-login-react-84707",
  storageBucket: "registro-login-react-84707.appspot.com",
  messagingSenderId: "1032298911655",
  appId: "1:1032298911655:web:c1f5c144a6c92a9c338882"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;