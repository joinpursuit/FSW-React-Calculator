import React from 'react';

const Display = ({ handleNumberClick, handleOperations, handleEquals, handleNegativity, handleClear, displayValue }) => {
    return(
        <>
            <h2>{displayValue}</h2>
            <button value="1" onClick={handleNumberClick}>1</button>
            <button value="2" onClick={handleNumberClick}>2</button>
            <button value="3" onClick={handleNumberClick}>3</button>
            <button value="4" onClick={handleNumberClick}>4</button>
            <button value="5" onClick={handleNumberClick}>5</button>
            <button value="6" onClick={handleNumberClick}>6</button>
            <button value="7" onClick={handleNumberClick}>7</button>
            <button value="8" onClick={handleNumberClick}>8</button>
            <button value="9" onClick={handleNumberClick}>9</button>
            <button value="0" onClick={handleNumberClick}>0</button>
            <button value="+" onClick={handleOperations}>+</button>
            <button value="-" onClick={handleOperations}>-</button>
            <button value="x" onClick={handleOperations}>x</button>
            <button value="/" onClick={handleOperations}>/</button>
            {/* <button value="%" onClick={}>%</button> */}
            <button value="-/+" onClick={handleNegativity}>-/+</button>
            <button value="=" onClick={handleEquals}>=</button>
            <button value="clear" onClick={handleClear}>CE/C</button>
        </>
    )
}

export default Display;