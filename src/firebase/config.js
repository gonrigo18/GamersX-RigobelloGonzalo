import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB77h0KUq8SSW1DFm3-2D14LBowj2iCgUk",
  authDomain: "gamersx-f93bc.firebaseapp.com",
  projectId: "gamersx-f93bc",
  storageBucket: "gamersx-f93bc.appspot.com",
  messagingSenderId: "81988853092",
  appId: "1:81988853092:web:2719134fa1ef08f27e2e71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);