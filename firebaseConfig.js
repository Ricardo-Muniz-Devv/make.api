// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh_ZhSdxnnkY2NdiaxT_vDYPFX618SNw0",
  authDomain: "make-api-be.firebaseapp.com",
  projectId: "make-api-be",
  storageBucket: "make-api-be.firebasestorage.app",
  messagingSenderId: "880549195560",
  appId: "1:880549195560:web:cdcf92db91c04fb2382a1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);