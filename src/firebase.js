// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGw_GAmvm4bYyCnANVFSvVEdC6BuJEMxE",
    authDomain: "ecom-e4093.firebaseapp.com",
    projectId: "ecom-e4093",
    storageBucket: "ecom-e4093.appspot.com",
    messagingSenderId: "545758079722",
    appId: "1:545758079722:web:3ac15fdf0155cd6f524593",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
