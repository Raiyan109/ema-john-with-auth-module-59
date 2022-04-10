// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARo8RpGTWuGEDBt2XPEd4kVVef_NyZSFI",
    authDomain: "ema-john-simple-6dcc7.firebaseapp.com",
    projectId: "ema-john-simple-6dcc7",
    storageBucket: "ema-john-simple-6dcc7.appspot.com",
    messagingSenderId: "178222597868",
    appId: "1:178222597868:web:799bc628a2bb6d959f07c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default app