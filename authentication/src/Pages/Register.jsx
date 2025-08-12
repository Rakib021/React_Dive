import React,{useState} from 'react'

import {registerWithEmailAndPassword} from '../firebase';
import { NavLink,useNavigate } from 'react-router-dom';
export default function Register() {
  const navigate = useNavigate();

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const handleSubmit = async(event) =>{
    event.preventDefault();
   try{
    const user = await registerWithEmailAndPassword(email,password);
    console.log(user);
    navigate("/login");
   }
   catch(err){
    console.log(err)
   }
  }
  return (
    <div className='flex flex-col p-4 justify-center items-center border border-gray-500 '>
      <h1 className='text-3xl my-4'>Register</h1>
      <form className='flex flex-col border p-4 rounded-md border-gray-600'>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email"
                id ="email"
                value ={email}
                onChange={(e) =>setEmail(e.target.value)}
                required
                placeholder='Enter Your Email Address'
                className='mx-2 my-2 p-1 border border-gray-300 rounded-md'
          />

        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password"
                id ="password"
                value ={password}
                onChange={(e) =>setPassword(e.target.value)}
                required
                placeholder='Enter Your Password'
                className='mx-2 my-2 p-1 border border-gray-300 rounded-md'
          />

        </div>

        <button className='bg-purple-500 text-white rounded-md mx-auto p-2 my-2' type='submit' onClick={handleSubmit}>
          Register
        </button>
      </form>
      <p className='my-2'>Already have an Account ?</p>
      <NavLink to="/login" className="underline text-blue-400"> Sign In</NavLink>
    </div>
  )
}
