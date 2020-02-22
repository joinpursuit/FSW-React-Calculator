import React from "react"
const Display =()=>{
return(
    <div className="display">
    <div className="calculator">
    <div className="col-12 inputview">0</div>
    <button className="button col-3" name="AC">AC</button>
    <button className="button col-3" name="%">%</button> 
    <button className="button col-3" name="±">±</button> 
    <button className="button col-3 orange" name="÷">÷</button>
    <button className="button col-3"  name="displayValue" value="7">7</button> 
    {/* <button className="button col-3"  name="displayValue" value="7" onClick={(e)=>{
    handleButtonClick(e,this.state)}}>7</button>  */}
    <button className="button col-3"  name="displayValue" value="8">8</button> 
    <button className="button col-3"  name="displayValue" value="9">9</button> 
    <button className="button col-3 orange" name="x">x</button>
    <button className="button col-3"  name="displayValue" value="3">4</button> 
    <button className="button col-3"  name="displayValue" value="5">5</button> 
    <button className="button col-3"  name="displayValue" value="6">6</button> 
    <button className="button col-3 orange" name="0">-</button>
    <button className="button col-3"  name="displayValue" value="1">1</button> 
    <button className="button col-3"  name="displayValue" value="2">2</button> 
    <button className="button col-3"  name="displayValue" value="3">3</button> 
    <button className="button col-3 orange"  name="+">+</button>
    <button className="button col-6"  name="displayValue" value="0">0</button> 
    <button className="button col-3"  name="displayValue" value=".">.</button> 
    <button className="button col-3 orange"  name="=">=</button>
    </div>
   </div>
)
  
}

export default Display