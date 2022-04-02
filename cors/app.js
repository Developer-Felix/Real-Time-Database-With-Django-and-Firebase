// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOqvcMRPFT0P68aW-50MtlL7aUuh8O-XA",
  authDomain: "djfirebase-22d59.firebaseapp.com",
  databaseURL: "https://djfirebase-22d59-default-rtdb.firebaseio.com",
  projectId: "djfirebase-22d59",
  storageBucket: "djfirebase-22d59.appspot.com",
  messagingSenderId: "984145162128",
  appId: "1:984145162128:web:4a5850f7ab3777ed7b0d15",
  measurementId: "G-N0YTTH16SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);