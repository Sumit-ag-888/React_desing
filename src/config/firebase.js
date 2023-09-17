// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMxqz32ubcs3tKOKTjSbJCVuHLy-Poqk4",
  authDomain: "react-firebase-5baac.firebaseapp.com",
  projectId: "react-firebase-5baac",
  storageBucket: "react-firebase-5baac.appspot.com",
  messagingSenderId: "579982150324",
  appId: "1:579982150324:web:58f2a7847e0a06c091a5e1",
  measurementId: "G-4K62R9S13Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const dataBase = getFirestore(app);

export {analytics, auth, dataBase }