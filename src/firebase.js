// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // apiKey: "AIzaSyDJyLsuxw4FRrBaqAeL-efXDH1RJdluc80",
  // authDomain: "vuefire-b6ab3.firebaseapp.com",
  // projectId: "vuefire-b6ab3",
  // storageBucket: "vuefire-b6ab3.firebasestorage.app",
  // messagingSenderId: "402641184549",
  // appId: "1:402641184549:web:80642aed19c5847268dccc",
  apiKey: "AIzaSyCHzAO1NhUptz04NghDpEneruu7EunBvmw",
  authDomain: "project-management-26957.firebaseapp.com",
  projectId: "project-management-26957",
  storageBucket: "project-management-26957.appspot.com",
  messagingSenderId: "855490773695",
  appId: "1:855490773695:web:1a963b28f4d6b4a6dbfc0a",
  measurementId: "G-H805RN16K0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
