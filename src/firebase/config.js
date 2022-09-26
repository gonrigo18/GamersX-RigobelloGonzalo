import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB77h0KUq8SSW1DFm3-2D14LBowj2iCgUk",
  authDomain: "gamersx-f93bc.firebaseapp.com",
  projectId: "gamersx-f93bc",
  storageBucket: "gamersx-f93bc.appspot.com",
  messagingSenderId: "81988853092",
  appId: "1:81988853092:web:2719134fa1ef08f27e2e71"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);