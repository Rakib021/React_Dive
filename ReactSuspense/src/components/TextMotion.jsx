import React from 'react'
import {motion } from 'framer-motion';



export default function TextMotion() {

  const message = " We are enjoying react framer motion ,its a awesome library !!";

  const wordArray = message.split(" ");
  return (
   <div
    className='text-2xl m-4 text-center'
   >
    {
      wordArray.map((word,index) =>(
       <motion.span key={index}
       initial ={{opacity:0}}
       animate ={{opacity :1}}
       transition={{
        duration :2,
        delay :index/10
       }}
       >

         {word} {" "}
       </motion.span>
      ))
    }

   </div>
  )
}
