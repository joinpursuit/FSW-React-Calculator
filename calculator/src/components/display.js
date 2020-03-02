import React from 'react'

const Display = ({state, handleNumberClick}) => {
    
        return(
         <div classNam he="display">
         <h2>{state.displayValue}</h2>
         <div className="AllNumbers">
            <button className="0" value="0" onClick={(e) =>handleNumberClick(e)}>0</button>
            <button className="1" value="1" onClick={(e) => handleNumberClick(e)}>1</button>
            <button className="2" value="2" onClick={(e) => handleNumberClick(e)}>2</button>
            <button className="3" value="3" onClick={(e) => handleNumberClick(e)}>3</button>
            <button className="4" value="4" onClick={(e) => handleNumberClick(e)}>4</button>
            <button className="5" value="5" onClick={(e) => handleNumberClick(e)}>5</button>
            <button className="6" value="6" onClick={(e) => handleNumberClick(e)}>6</button>
            <button className="7" value="7" onClick={(e) => handleNumberClick(e)}>7</button>
            <button className="8" value="8" onClick={(e) => handleNumberClick(e)}>8</button>
            <button className="9" value="9" onClick={(e) => handleNumberClick(e)}>9</button>
        </div>
         <div className="operators">
            <button className="+" value="+" onClick={()}>+</button>
            <button className="-" value="-" onClick=>-</button>
            <button className="*" value="*">*</button>
            <button className="/" value="/">÷</button>
            <button className="=" value="=">=</button>
            <button className="clear" value="clear">C</button>

        </div>
         
    </div>
        
        )
    
}

export default Display;