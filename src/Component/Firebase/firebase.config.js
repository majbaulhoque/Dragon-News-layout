// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfQO9dXhTXF5_HgOVUITldMovWld4ab-g",
  authDomain: "the-dragon-news-eb6e8.firebaseapp.com",
  projectId: "the-dragon-news-eb6e8",
  storageBucket: "the-dragon-news-eb6e8.appspot.com",
  messagingSenderId: "574162448937",
  appId: "1:574162448937:web:13ab1ea4e8f66a114fe238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
