// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3zuUkFVfAicEtLcSGt3-HDYhH0I6nfSI",
  authDomain: "authentication-b2039.firebaseapp.com",
  projectId: "authentication-b2039",
  storageBucket: "authentication-b2039.firebasestorage.app",
  messagingSenderId: "487894182920",
  appId: "1:487894182920:web:b158d6f5213247abfdf5bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    // console.log(user);
    return user;
  } catch (err) {
    // console.log(err);
    throw error;
  }
};
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    throw error;
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    throw error;
  }
};

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    return user;
  } catch (err) {
    throw error;
  }
};

export {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  auth,
  sendPasswordReset,
  signInWithGoogle
};
