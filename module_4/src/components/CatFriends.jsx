import React, { useRef } from 'react'

export default function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleFirstCat(){
    firstCatRef.current.scrollIntoView({
      behavior: "smooth",
      block:"nearest",
      inline:'center'
    })
  }
  function handleSecondCat(){
    secondCatRef.current.scrollIntoView({
      behavior: "smooth",
      block:"nearest",
      inline:'center'
    })
  }
  function handleThirdCat(){
    thirdCatRef.current.scrollIntoView({
      behavior: "smooth",
      block:"nearest",
      inline:'center'
    })
  }


  return (
 <>
      <nav>
        <button onClick={handleFirstCat} >
          Neo
        </button>
        <button onClick={handleSecondCat} >
          Millie
        </button>
        <button onClick={handleThirdCat} >
          Bella
        </button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src="https://placecats.com/neo/300/200"
              alt="Neo"
              ref={firstCatRef}
              
            />
          </li>
          <li>
            <img
              src="https://placecats.com/millie/200/200"
              alt="Millie"
              ref={secondCatRef}
       
            />
          </li>
          <li>
            <img
              src="https://placecats.com/bella/199/200"
              alt="Bella"
              ref={thirdCatRef}
            
            />
          </li>
        </ul>
      </div>
    </>
  )
  }
