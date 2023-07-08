import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyD3sGJHUKEfyKbn0cfPf5tAxkU2LlAWvkY',
    authDomain: "next-full-stack-app-001.firebaseapp.com",
    projectId: "next-full-stack-app-001",
    storageBucket: "next-full-stack-app-001.appspot.com",
    messagingSenderId: '682576884597',
    appId: '1:682576884597:web:42457fa77055979893993c',
    measurementId: "G-41KEZL0FG4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db }