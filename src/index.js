import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { } from "firebase/database"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFUzm27n9IkIV820A_VyyvCXb9v8cBI8A",
  authDomain: "hackher-9b4ed.firebaseapp.com",
  databaseURL: "https://hackher-9b4ed.firebaseio.com",
  projectId: "hackher-9b4ed",
  storageBucket: "hackher-9b4ed.appspot.com",
  messagingSenderId: "875167518655",
  appId: "1:875167518655:web:ea3b2dd4bc31358d601b0a",
  databaseURL: "https://databaseName.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// var database = firebase.database();