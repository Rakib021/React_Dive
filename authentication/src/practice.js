import { initializeApp } from "firebase/app";

import {createUserWithEmailAndPassword,getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD3zuUkFVfAicEtLcSGt3-HDYhH0I6nfSI",
  authDomain: "authentication-b2039.firebaseapp.com",
  projectId: "authentication-b2039",
  storageBucket: "authentication-b2039.firebasestorage.app",
  messagingSenderId: "487894182920",
  appId: "1:487894182920:web:b158d6f5213247abfdf5bd",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerEmailAndPassword =async(email,password) =>{
  try{
    const res = await createUserWithEmailAndPassword(auth,email,password);
   const user = res.user;
   return user;

  }catch(err){
    console.log(error)
  }

}

export {registerEmailAndPassword};