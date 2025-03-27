// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import {toast} from 'react-toastify'
impo
const firebaseConfig = {
  apiKey: "AIzaSyB3Qqbtjbe0-w6m8ddKvHYUsBw9iweZiWY",
  authDomain: "netflix-clone-a94e9.firebaseapp.com",
  projectId: "netflix-clone-a94e9",
  storageBucket: "netflix-clone-a94e9.firebasestorage.app",
  messagingSenderId: "716854270282",
  appId: "1:716854270282:web:6f2466472c19ad8b0549b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)
const signup = async (name, email, password) => {
    try {
        await createUserWithEmailAndPassword(auth,email,password )
        const user = res.user;
await addDoc(collection(db, "user"), {
    uid: user.uid,
    name,
    authProvider: "local",
    email})

    } catch (error) {
        console.log(error)
        toast.error(error.code)
       
    }
}
const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code)

        
    }
};
const logout = () => {
    signOut(auth);
}

export { auth, db, login, signup, logout };
