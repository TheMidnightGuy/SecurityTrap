import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithCustomToken, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = ({
    apiKey: "AIzaSyCrEDO9tHNXZkZnhCI0uZxVGXez-VMBn0E",
    authDomain: "securitytrap.firebaseapp.com",
    databaseURL: "https://securitytrap-default-rtdb.firebaseio.com",
    projectId: "securitytrap",
    storageBucket: "securitytrap.firebasestorage.app",
    messagingSenderId: "1074157431505",
    appId: "1:1074157431505:web:4cf4c11a3264cc8086b3f0",
    measurementId: "G-8FGT22S36N"
})

// Initialize Firebase
const app   = initializeApp(firebaseConfig);
const db    = getFirestore(app)
const auth  = getAuth(app)

//Chequear status de Auth
onAuthStateChanged(auth, user=> { /* check status*/ })


  