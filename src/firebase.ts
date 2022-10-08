// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9sy8oHG27UdZ-xr366GbavGp9NscCYo0",
  authDomain: "scandiweb-4a02e.firebaseapp.com",
  projectId: "scandiweb-4a02e",
  storageBucket: "scandiweb-4a02e.appspot.com",
  messagingSenderId: "68496944323",
  appId: "1:68496944323:web:ebf8ec5a15c0ce790a0676",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
