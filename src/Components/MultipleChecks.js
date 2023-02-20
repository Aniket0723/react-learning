import React from 'react'
import { useState } from 'react';

function MultipleChecks() {
    const [fruitsArray , setFruitsArray] = useState([]);
    const handleChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        
        console.log(value, checked)
        if(checked){
            setFruitsArray([
                ...fruitsArray,value
            ])

        }else{
            setFruitsArray(fruitsArray.filter((e)=>(e !== value)));

        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(fruitsArray)
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label htmlFor=''>SELECT FRUITS : &nbsp;</label>

    <input type="checkbox" name="fruits" value="Apple" onChange={handleChange}/>
    <label htmlFor=" ">Apple</label>
    &nbsp;

    <input type="checkbox" name="fruits" value="Orange" onChange={handleChange}/>
    <label htmlFor=" ">Orange</label>
    &nbsp;
    
    <input type="checkbox" name="fruits" value="Strawberry" onChange={handleChange}/>
    <label htmlFor=" ">Strawberry</label>
    &nbsp;

    <input type="checkbox" name="fruits" value="Mango" onChange={handleChange}/>
    <label htmlFor=" ">Mango</label>
    &nbsp;

    <br/>
    <br/>
    <input type="submit" value="Submit"></input>
    </form>
    </div>
  )
}

export default MultipleChecks