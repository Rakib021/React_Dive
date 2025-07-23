import React, { useRef } from 'react'

export default function Counter() {
  const ref = useRef(0);

  function handleClick(){
    ref.current = ref.current +1;
    alert(`You click this button ${ref.current} Times!!`)
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me Count</button>
    </div>
  )
}
