import React from 'react'
import { useState } from 'react'

function OtherInputs() {
    const[textArea, setTextArea] = useState("");
    const[menu, setMenu] = useState("US");
    const[checked, setChecked] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Comments:',e.target[0].value)
        console.log('Country:',e.target[1].value)
        console.log('CheckBox:',e.target[2].checked)
        
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label style={{verticalAlign:"top"}} htmlFor=" ">Comments: &nbsp;</label>
    <textarea value={textArea} onChange={ (e) => setTextArea(e.target.value)} cols="50" rows="10"></textarea>
    <br></br>
    <label htmlFor="">Select Country : &nbsp; </label>
    <select value={menu} onChange={ (e) => setMenu(e.target.value)}>
        <option value="CS">CANNADA</option>
        <option value="UK">UNITED KINGDOM</option>
        <option value="US">UNITED STATE</option>
        <option value="IN">INDIA</option>
    </select>
    <br></br>
    <br></br>
    <label htmlFor="">YES I AM AGREE TO DO SHIT &nbsp;</label>
    <input type="checkbox" checked={checked} onChange={ (e) => setChecked(e.target.checked)} />
    <br></br>
    <br></br>
    <input type="submit" value="Submit"/>
    </form>
    </div>
  )
}

export default OtherInputs