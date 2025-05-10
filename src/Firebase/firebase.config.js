// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC55N5hzM_zQEekAQ4Sg_3bNDNHj5GZ5hk",
  authDomain: "dragon-news-46634.firebaseapp.com",
  projectId: "dragon-news-46634",
  storageBucket: "dragon-news-46634.firebasestorage.app",
  messagingSenderId: "1039372989319",
  appId: "1:1039372989319:web:b60514eee4c5911520d922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app