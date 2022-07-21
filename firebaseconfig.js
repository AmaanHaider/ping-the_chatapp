// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"
// import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAJkZ0c3S6_oSOfK_-xrQB4F69Lb7qZZfg",
//   authDomain: "mychatapp-dad20.firebaseapp.com",
//   projectId: "mychatapp-dad20",
//   storageBucket: "mychatapp-dad20.appspot.com",
//   messagingSenderId: "866183171266",
//   appId: "1:866183171266:web:8807ade28eb0ac7283ff5b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth()
// const db = getFirestore();

// export { auth, db };


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