import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "next-full-stack-app-001.firebaseapp.com",
    projectId: "next-full-stack-app-001",
    storageBucket: "next-full-stack-app-001.appspot.com",
    messagingSenderId: process.env.MESSENGER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: "G-41KEZL0FG4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db }