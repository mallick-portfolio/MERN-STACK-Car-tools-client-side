// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyB6SDR7u-rHNOUIlZsbxCC-QIqy8LR6w2Q",
  // authDomain: "garden-tools-8a9de.firebaseapp.com",
  // projectId: "garden-tools-8a9de",
  // storageBucket: "garden-tools-8a9de.appspot.com",
  // messagingSenderId: "729936257461",
  // appId: "1:729936257461:web:9a546e5c3e07579de3b9fc"


  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId




};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth