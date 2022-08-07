import firebase from "firebase/compat/app";
import { getApp, getApps, initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCYNtEuXtiOTC_d_tC1uo-1CUAfj2QEff4",
  authDomain: "blinddate-11b2f.firebaseapp.com",
  projectId: "blinddate-11b2f",
  storageBucket: "blinddate-11b2f.appspot.com",
  messagingSenderId: "246639396041",
  appId: "1:246639396041:web:57626f7a84f11cb80a7918",
  measurementId: "G-E18HDL5ZWS",
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();
