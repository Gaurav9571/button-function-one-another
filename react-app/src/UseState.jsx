import React, { useState } from 'react'
import "./App.css"


const UseState = () => {
  const [Count, setCount] = useState(0)
  console.log(Count);

  const increment = () => {
    setCount(Count + 1);
  }
  const decrement = () => {
    setCount(Count - 1);
  }


  return (
    <>
    
      <h1>Count:{Count}</h1>
      <div className='container'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  )
}

export default UseState