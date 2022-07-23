
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBA5Nzy3tXv7QM3FyXFi5WuARgKllHdLpE",
  authDomain: "ping-backend-c9f81.firebaseapp.com",
  projectId: "ping-backend-c9f81",
  storageBucket: "ping-backend-c9f81.appspot.com",
  messagingSenderId: "432320497673",
  appId: "1:432320497673:web:6641b8c47ecafce539d0d8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore();

export { auth, db };