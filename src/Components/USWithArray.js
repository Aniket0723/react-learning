import React, { useState } from 'react'



function USWithArray() {
    let num = [1,2,3,4,5];
    let [numbers , setNumbers] = useState(num);
    let changeList = () =>{
        setNumbers(previousState =>{
            return[
              ...previousState,
              Math.floor(Math.random() *20)
            ]
               

            
        });
    }
  return (
    <div>
    <ul>
    {
       numbers.map((n,i) => <li key={i}>{n}</li>)
    }
    </ul>
    <button onClick={changeList}>Chnage Array</button>
    </div>
  )
}

export default USWithArray