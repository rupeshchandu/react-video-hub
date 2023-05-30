import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCPcVU-CmKhjOSZSUqLvwLq4QGS97o0x1s",
  authDomain: "react-video-hub-d336e.firebaseapp.com",
  projectId: "react-video-hub-d336e",
  storageBucket: "react-video-hub-d336e.appspot.com",
  messagingSenderId: "143153483593",
  appId: "1:143153483593:web:789c9b78e7fbc76521d498",
  measurementId: "G-WZDQDN6N1S"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);