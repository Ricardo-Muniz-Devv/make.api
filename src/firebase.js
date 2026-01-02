import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBh_ZhSdxnnkY2NdiaxT_vDYPFX618SNw0",
  authDomain: "make-api-be.firebaseapp.com",
  projectId: "make-api-be",
  storageBucket: "make-api-be.firebasestorage.app",
  messagingSenderId: "880549195560",
  appId: "1:880549195560:web:cdcf92db91c04fb2382a1d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
