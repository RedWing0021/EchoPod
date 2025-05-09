// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-XWnuP4y5eTCAPHtX3Dg5k5NKr0iso4E",
  authDomain: "techfest-f9212.firebaseapp.com",
  projectId: "techfest-f9212",
  storageBucket: "techfest-f9212.firebasestorage.app",
  messagingSenderId: "934750507094",
  appId: "1:934750507094:web:027b3c1d6c7788f7316bf7",
  measurementId: "G-QXC37HQYTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;