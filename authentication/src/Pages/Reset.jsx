import React,{useState} from 'react'
import { sendPasswordReset } from '../firebase';
import { NavLink } from 'react-router-dom';

export default function Reset() {
  const [email,setEmail] = useState('');
  return (
    <div className='m-8 '>
      <h1 className='text-3xl m-2 text-center'>Reset Your Password!!</h1>

      <div  className="flex flex-col p-4 justify-center items-center border border-gray-500  rounded-2xl">
        <input type="email"
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
              placeholder='Enter your email Address'
               className='mx-2 my-2 p-1 border border-gray-600 rounded-md'
        />

        <button  className="bg-sky-600 text-white rounded-md mx-auto p-2 my-2" onClick={() =>sendPasswordReset(email)}>Send Password  Reset Email</button>
      </div>
      <p className='m-4 text-bold'>Don't you have account ? {' '}
      <NavLink className='underline text-bold text-red-900' to='/register'>Register Now</NavLink>
     </p>
    </div>
  )
}
