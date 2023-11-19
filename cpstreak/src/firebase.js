// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA9FXVPzsVAhm4waSKd3hMzUjBog5VsG0",
  authDomain: "cp-streak-1.firebaseapp.com",
  projectId: "cp-streak-1",
  storageBucket: "cp-streak-1.appspot.com",
  messagingSenderId: "511140773911",
  appId: "1:511140773911:web:91539483075bb1be8c1c52",
  measurementId: "G-WN7H5NFNVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);