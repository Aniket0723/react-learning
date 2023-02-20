import React, { useState } from "react";

function USWithObject() {
  const obj = {
    name: "Aniket",
    surname: "Nagrale",
    age: 23,
    height: 5.11,
    isYoung: true,
  };
  const [person, setPerson] = useState(obj);
  let changeState = () => {
    setPerson(previousState =>{
        return{
            ...previousState,
            name: "Vinod"
        }
    });
    // setPerson({ 
    //   name: "Vinod",
    //   surname: "Nagrale",
    //   age: 53,
    //   height: 6.11,
    //   isYoung: false,
    // });
  };
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.surname}</h1>
      <h1>{person.age}</h1>
      <h1>{person.isYoung.toString()}</h1>
      <button onClick={changeState}>Change</button>
    </div>
  );
}

export default USWithObject;
