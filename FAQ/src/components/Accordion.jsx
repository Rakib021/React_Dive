import React, { useState } from 'react'
import Question from './Question'

export default function Accordion() {
  const [activeIndex,setActiveIndex] = useState(0);
  return (
    <div className='border-4 w-190 h-160 m-4 p-8 items-cente justify-center'>
      <h1 className='text-2xl mt-4'>If you have FAQ Ask</h1>
      <Question 
      title ="Paid Course"
      isActive ={activeIndex ===0}
      onShow ={()=>setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis unde, iste maiores adipisci eaque aperiam illum temporibus vitae voluptate suscipit ipsum perferendis consequatur quibusdam dicta commodi beatae ab voluptatum deserunt.
      </Question>
      <Question title ="free course"
         isActive ={activeIndex ===1}
      onShow ={()=>setActiveIndex(1)}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consectetur vel nostrum quos sint aut tenetur, harum quod inventore voluptates ducimus ipsam esse sit officiis. Ullam, alias nemo! Dicta, sunt.
      </Question>
    </div>
  )
}
