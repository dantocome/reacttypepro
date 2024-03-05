import React, { useState } from 'react'

const Counter = () => {
    const[count, setCount] = useState(0);
    const handleIncrement = ()=>{
        setCount(count +1);
    }

    const handleDecrement = ()=>{
      setCount(count -1);
  }
  return (
    <>
    <div>
      Counter: {count}
    </div>
    <button onClick={handleIncrement}>Increment:</button>
    <button onClick={handleDecrement}>Decrement:</button>
    </>
  )
}

export default Counter
