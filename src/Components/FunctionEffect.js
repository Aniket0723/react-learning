import React, { useEffect, useState } from 'react'

function FunctionEffect() {
    let [count,setCount] =useState(0)
    //1
    // useEffect(()=>{
    //     console.log("Hello i am UseEffect..." + count)
    // } ,[])

    // 2
    useEffect(()=>{
        console.log("Hello i am UseEffect..." + count)
    } ,[count])

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={() =>setCount(count+1)}>Update</button>
    </div>
  )
}

export default FunctionEffect