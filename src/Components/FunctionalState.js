import React, { useState } from 'react'

function FunctionalState() {
    let [count,setCount] = useState(0)
    let Increase = () => {
        setCount(count + 1)
    }
    let Decrease = () => {
        setCount(count - 1)
    }
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={Increase}>Increement</button>
      <button onClick={Decrease}>Decreasment</button>
    </div>
  )
}

export default FunctionalState