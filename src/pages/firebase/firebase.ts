// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBSjL1MmWGY6AftnJrVh1of16iIF5AvOo",
  authDomain: "pusat-layanan-informasi.firebaseapp.com",
  projectId: "pusat-layanan-informasi",
  storageBucket: "pusat-layanan-informasi.appspot.com",
  messagingSenderId: "977231757810",
  appId: "1:977231757810:web:1221e857dc52ac6c062b6b",
  measurementId: "G-BEYDVLEP5X"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
