import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

function HookUseRef() {
  const firstRef = useRef();
  const lastRef = useRef();
  

  useEffect(() => {
    console.log(firstRef);
    console.log(lastRef);
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    lastRef.current.style.backgroundColor="PINK";
    console.log(
      "FULL NAME = ",
      firstRef.current.value,
      lastRef.current
    );
  };

  return (
    <div ref={lastRef}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">ENTER FIRST NAME : </label>
        <input type="text" ref={firstRef} placeholder="First Name" />
        <br />
        <br />
        <label htmlFor="">ENTER LAST NAME : </label>
        <input type="text"  placeholder="Last Name" />
        
        <br />
        <br />
        <button>CLICK ME</button>
      </form>
    </div>
  );
}

export default HookUseRef;
