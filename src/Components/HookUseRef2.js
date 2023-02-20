import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function HookUseRef2() {
  const [inputValue, setInputValue] = useState("");
//   const [count ,  setCount] = useState(0);
const count = useRef(0)

//   useEffect(()=>{
//     setCount(count+1)
//   },[]);

useEffect(() =>{
    // console.log(count.current)
    count.current = count.current + 1;
})

  return (
    <div>
      <label htmlFor="">Enter Name : </label>
      <input type="text"
       placeholder="Enter Name"
        value={inputValue} 
         onChange={(e) => setInputValue(e.target.value)}/>
         <h2>Render count:{count.current}</h2>
         <h3>Data {inputValue}</h3>
    </div>
  );
}

export default HookUseRef2;
