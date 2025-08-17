import React from 'react'

export default function ShowModal({onClose}) {
  return (
    <div className='flex justify-evenly items-center rounded-lg  border absolute top-20 left-12 bottom-110 bg-black text-white p-2 z-10'>
      <h1 className='mx-2'>I am the modal</h1>
      <button className='border rounded-md bg-red-600 text-white p-4' onClick={onClose}>Close</button>
    </div>
  )
}
