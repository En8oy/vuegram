// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import IFirebase from './interfaces/Firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: IFirebase = {
  apiKey: "AIzaSyCq5L_-uvR2VwBQ5Hbk9C2zZnaQqujhZ_Y",
  authDomain: "vuegram-66e5a.firebaseapp.com",
  projectId: "vuegram-66e5a",
  storageBucket: "vuegram-66e5a.appspot.com",
  messagingSenderId: "922899489276",
  appId: "1:922899489276:web:5e3a4898ed35376577d279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default {app}