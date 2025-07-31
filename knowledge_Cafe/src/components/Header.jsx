import React from 'react'
import profilePic from '../assets/profile.png';



export default function Header() {
  return (
    <div className='flex justify-between items-center p-4  border-b-4 max-w-4xl mx-auto'>
      <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
      <img src={profilePic} alt="" />

    </div>
  )
}
