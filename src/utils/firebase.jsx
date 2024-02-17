// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEaZCALC7jjVquK-sOrLaKQXDuRpwnUXU",
  authDomain: "netflixgpt-e398e.firebaseapp.com",
  projectId: "netflixgpt-e398e",
  storageBucket: "netflixgpt-e398e.appspot.com",
  messagingSenderId: "957382090751",
  appId: "1:957382090751:web:87fcc4c66edcf65d39d1ca",
  measurementId: "G-QR4X1BN35L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
