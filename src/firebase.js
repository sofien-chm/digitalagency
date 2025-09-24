// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJyLsuxw4FRrBaqAeL-efXDH1RJdluc80",
  authDomain: "vuefire-b6ab3.firebaseapp.com",
  projectId: "vuefire-b6ab3",
  storageBucket: "vuefire-b6ab3.firebasestorage.app",
  messagingSenderId: "402641184549",
  appId: "1:402641184549:web:80642aed19c5847268dccc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
