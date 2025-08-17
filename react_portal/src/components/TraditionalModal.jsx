import React, { useState } from 'react'
import ShowModal from './modal/ShowModal';



export default function TraditionalModal() {
  const [showModal,setShowModal] = useState(false);
  return (
    <div className='relative border border-l-black mb-5 p-2 w-64 h-20 overflow-hidden'>
<button className='border rounded-md bg-purple-400 text-white p-4' onClick={() =>setShowModal(true)}>Show The modal</button>

{
  showModal && 
  <ShowModal onClose={() =>setShowModal(false)} />
}
    </div>
  )
}
