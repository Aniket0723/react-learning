import React, { useState } from "react";

function ControlledFunctionForm() {
  const [name, setName] = useState("");
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };
  return (
    <div>
      <form onSubmit={handleSubmission}>
        <label htmlFor=" ">Enter Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value.toUpperCase())}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ControlledFunctionForm;
