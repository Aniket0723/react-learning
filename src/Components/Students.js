import React from "react";

function Students() {
  // const students = ["Aniket","vinod","Nagrale"];
  // let studentNames=  students.map((std,index) => <li key={index}>{std}</li>);
  const students = [
    {
      id: 1,
      name: "Aniket",
      age: 23,
    },
    {
      id: 2,
      name: "Vinod",
      age: 52,
    },
    {
      id: 3,
      name: "Nagrale",
      age: 100,
    },
  ];

  return (
    <div>
      {   students.map(std => <h1 key={std.id}>{std.name}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        {std.age}</h1>) }
    </div>
  );
}

export default Students;
