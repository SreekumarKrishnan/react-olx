import firebase from "firebase"
import "firebase/auth"
import "firebase/firebase"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBzEiBWFjhg-ZG-ra6OMKCdzsfHf-RvyUU",
  authDomain: "olx-clone-6e7c4.firebaseapp.com",
  projectId: "olx-clone-6e7c4",
  storageBucket: "olx-clone-6e7c4.appspot.com",
  messagingSenderId: "158001205522",
  appId: "1:158001205522:web:3798dd2781f6b10f18e3cb",
  measurementId: "G-5BVXLZGF0R"
};


export const Firebase = firebase.initializeApp(firebaseConfig);