import React from 'react'

function Buttons(props) {

    const { displayValue } = props

    return (
        <div>
            <div>
                <button value={0} onClick={displayValue}>A/C</button>
                <button value={"-"} onClick={displayValue}>+/-</button>
                <button value={"/"} onClick={displayValue}>/</button>
            </div>
            <div>
                <button value={7} onClick={displayValue}>7</button>
                <button value={8} onClick={displayValue}>8</button>
                <button value={9} onClick={displayValue}>9</button>
                <button value={"*"} onClick={displayValue}>*</button>
            </div>
            <div>
                <button value={4} onClick={displayValue}>4</button>
                <button value={5} onClick={displayValue}>5</button>
                <button value={6} onClick={displayValue}>6</button>
                <button value={"-"} onClick={displayValue}>-</button>
            </div>
            <div>
                <button value={1} onClick={displayValue}>1</button>
                <button value={2} onClick={displayValue}>2</button>
                <button value={3} onClick={displayValue}>3</button>
                <button value={"+"} onClick={displayValue}>+</button>
            </div>
            <div>
                <button value={0} onClick={displayValue}>0</button>
                <button value={"="} onClick={displayValue}>=</button>
            </div>    
        </div>
    )
}

export default Buttons
