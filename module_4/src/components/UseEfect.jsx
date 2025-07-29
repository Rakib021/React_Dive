import React, { useEffect, useState } from 'react'

export default function UseEfect() {
  const [state,setState] = useState('');

  useEffect(() =>{


    return ()=>{
      //for clean up your useEffect

      //every time first you read bangla documentation from reactive courses then read react official documentation .Hopefully you have  a great knowledge after read this documentation.
    }

  },[state])
  return (
    <div>UseEfect</div>
  )
}
