// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKWoR7yhvw1UDVPb3Y6Sd7U08cGcIvdXQ",
  authDomain: "sabkastore-88e1e.firebaseapp.com",
  projectId: "sabkastore-88e1e",
  storageBucket: "sabkastore-88e1e.appspot.com",
  messagingSenderId: "750686871480",
  appId: "1:750686871480:web:a7fab95c3588c0bb69394d",
  measurementId: "G-XWHZ8VFF5F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);