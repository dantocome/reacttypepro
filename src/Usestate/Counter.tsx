import React, { useState } from 'react'

const Counter = () => {
    const[count, setCount] = useState(0);
    const handleCount = ()=>{
        setCount(count +1);
    }
  return (
    <>
    <div>
      Counter
    </div>
    <button onClick={handleCount}>Increment: {count}</button>
    </>
  )
}

export default Counter
