// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-713a6.firebaseapp.com",
  projectId: "mern-estate-713a6",
  storageBucket: "mern-estate-713a6.appspot.com",
  messagingSenderId: "73613450727",
  appId: "1:73613450727:web:f01079561be6dfbda83142"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);