// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnmszGRgL6hrkhMnCE3j0uH7TBUtOGEHY',
  projectId: 'task-management-b0491',
  storageBucket: 'task-management-b0491.appspot.com',
  messagingSenderId: '1090945230847',
  appId: '1:1090945230847:web:270857b2e04cd32f3fe9ca'
  // apiKey: import.meta.env.VITE_apikey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default (auth)