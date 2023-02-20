import React, { useState } from 'react'

function USComponents() {
    const [name,setName]= useState("Aniket")
    let changeState = () =>{
        setName("Aniket2")
    }
  return (
    <div>
    <h1>{name}</h1>
    <button onClick={changeState}>Update</button>

    </div>
  )
}

export default USComponents














// import React, { useState } from 'react'

// function USComponents() {
//     const myArray= useState("Aniket")
//     let changeState = () =>{
//         myArray[1]("Aniket2")
//     }
//   return (
//     <div>
//     <h1>{myArray[0]}</h1>
//     <button onClick={changeState}>Update</button>

//     </div>
//   )
// }

// export default USComponents











// import React, { useState } from 'react'

// function USComponents() {
//     const myArray= useState("Aniket")
//   return (
//     <div>
//     <h1>{myArray[0]}</h1>
//     <button onClick={()=> myArray[1]("Ashutosh")}>Update</button>

//     </div>
//   )
// }

// export default USComponents