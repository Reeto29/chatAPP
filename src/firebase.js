// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY3yo5245zg_TLUQ3LDlL7R3VD-LzucL8",
  authDomain: "chat-app-46559.firebaseapp.com",
  projectId: "chat-app-46559",
  storageBucket: "chat-app-46559.appspot.com",
  messagingSenderId: "389345203592",
  appId: "1:389345203592:web:3c3196d6ed85994ef0163d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)