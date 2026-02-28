// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0uyMpZzJRxkX2kUkzp613Zzw4Xc1TKFQ",
  authDomain: "flowfix-65fd1.firebaseapp.com",
  projectId: "flowfix-65fd1",
  storageBucket: "flowfix-65fd1.firebasestorage.app",
  messagingSenderId: "878384279716",
  appId: "1:878384279716:web:041715c6ae2aa120b23631",
  measurementId: "G-HD6H5ET5X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
