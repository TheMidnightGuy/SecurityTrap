import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword ,signInWithCustomToken, onAuthStateChanged } from "firebase/auth";


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
const db    = getFirestore(app);
const auth  = getAuth(app);

//Chequear status de Auth
onAuthStateChanged(auth, user=> { /* check status*/ })

//Mensaje dinamico
function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000)
}

//Boton de registro
const signUp=document.getElementById("submitSignUp");
signUp.addEventListener("click", (event)=>{
    event.preventDefault();
    const email=document.getElementById("rEmail").value;
    const password=document.getElementById("rPassword");
    const fullname=document.getElementById("rfullname");
    const actname=document.getElementById("rAccountname");

    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
            email: email,
            fullname: fullname,
            actname: actname
        };
        showMessage('¡Cuenta creada correctamente!', 'signUpMessage');
        const docRef=doc(db, "users", user.uid);
        setDoc(docRef,userData)
        .then(()=>{
            window.location.href='login.html';
        })
        .catch((error)=>{
            console.error("error al redactar documento", error);
        })
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            showMessage('Email ya en uso', 'signUpMessage');
        }
        else{
            showMessage('No se ha podido crear usuario', 'signUpMessage');
        }
    })
});
  