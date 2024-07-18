import React ,{useEffect} from 'react'
import { useState } from 'react'

const UseEffect = () => {
    const [Count, setCount] = useState(0)
    const [CountTwo, setCountTwo] = useState(0)
    // console.log(Count);



    useEffect(()=>{
        alert("counter increased by 1")
    },[CountTwo])
  
    const increment = () => {
      setCount(Count + 1);
    }
    const incrementTwo = () => {
      setCountTwo(CountTwo + 1);
    }
  
  
    return (
      <>
      
        <h1>Count:{Count}</h1>
        <div className='container'>
          <button onClick={increment}>Increment</button>
        </div>
        <h1>Count Two:{CountTwo}</h1>
        <div className='container'>
          <button onClick={incrementTwo}>Decrement</button>
        </div>
      </>
    )
  }

export default UseEffect