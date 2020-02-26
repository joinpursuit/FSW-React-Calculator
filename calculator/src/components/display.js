import React from 'react'

const Display = ({state, handleNumberClick}) => {
    
        return(
         <div className="display">
         <h2>{state.displayValue}</h2>
         <div className="AllNumbers">
            <button className="0" value="0" onClick={(e) => handleNumberClick(e)}>0</button>
            <button className="1" value="1" onClick={(e) => handleNumberClick(e)}>1</button>
            <button className="2">2</button>
            <button className="3">3</button>
            <button className="4">4</button>
            <button className="5">5</button>
            <button className="6">6</button>
            <button className="7">7</button>
            <button className="8">8</button>
            <button className="9">9</button>
        </div>
         <div className="operators">
            <button className="+">+</button>
            <button className="-">-</button>
            <button className="*">*</button>
            <button className="/">÷</button>
            <button className="=">=</button>
            <button className="clear">C</button>

        </div>
         
    </div>
        
        )
    
}

export default Display;