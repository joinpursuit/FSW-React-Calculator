import React from "react";
import "./styles/Mod.css"

const Mod = ({handleMod}) => {
//   const modButtons = ["+", "-", "÷", "*"];
  const modButtons = {
    sum:  "+", 
    subtract: "-", 
    add:"÷",
    multiply: "*"}

// const entry = ()=>{
//     console.log(Object.entries(modButtons))
// }

  return (
    <div className="modButtons">
     {/* <button onClick={entry}>entry</button> */}
  <ul>
 { Object.entries(modButtons).map((el)=>{
     return <li type={el[0]} key={el[0]} value={el[1]} className="all-mods">

<button onClick={()=>handleMod(el[0])}>{el[1]}</button>
     </li>
 })}
  </ul>
    </div>
  );
};

export default Mod;
