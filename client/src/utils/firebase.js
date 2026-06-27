
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-c58ed.firebaseapp.com",
  projectId: "fir-c58ed",
  storageBucket: "fir-c58ed.firebasestorage.app",
  messagingSenderId: "635005498749",
  appId: "1:635005498749:web:60b9db539f159d2e2fc814"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}