import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPD3TEb1CegSvadcihGOPaOYG-yRuEQCk",
  authDomain: "weatherapp-69beb.firebaseapp.com",
  projectId: "weatherapp-69beb",
  storageBucket: "weatherapp-69beb.appspot.com",
  messagingSenderId: "292361750587",
  appId: "1:292361750587:web:b9ee58f47212bb7e27741e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
