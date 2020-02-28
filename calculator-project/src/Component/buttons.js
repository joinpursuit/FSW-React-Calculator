import React  from 'react'
import "../CSS/buttons.css"
import "../App"


const Buttons = (props)=>{
const {input} = props 
   
    return(
    <div className="buttons">
    <p id="input">{input}</p>
        <div className="set1">
        <button name="clear" className="clear">AC</button>
        <button name="positive_negative" className="+-">+-</button>
        <button name="divide" className="divide" >/</button>
        </div>
        
         <div className = "set2">
         <button name="7" className="7" onClick={input}>7</button>
         <button name="8" className="8" >8</button>
         <button name="9" className="9" >9</button>
         <button name="multiply" className="multiply">x</button>
         </div>
         
         <div className = "set3">
         <button name="4" className="4" >4</button>
         <button name="5" className="5" >5</button>
         <button name="6" className="6" >6</button>
         <button name="subtract" className="subtract" >-</button>
         </div>
     
         <div className= "set4">
         <button name="1" className="1" >1</button>
         <button name="2" className="2" >2</button>
         <button name="3" className="3" >3</button>
         <button name="add" className="add">+</button>
         </div>
         <div className = "set5">
         <button name="0" className="0">0</button>
         <button name ="." className=".">.</button>
         <button name="equal" className="equal">=</button>
     
       
         </div>
     
         
    </div>
     
     

       )
           
       
}

export default Buttons