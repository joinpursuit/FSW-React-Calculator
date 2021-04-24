import React from 'react'

function Buttons(props) {

    const { display, negative, reset, handleOperation, handleResult } = props

    return (
        <div>
            <div>
                <button value={0} onClick={reset}>A/C</button>
                <button value={"-"} onClick={negative}>+/-</button>
                <button value={"/"} onClick={handleOperation}>/</button>
            </div>
            <div>
                <button value={7} onClick={display}>7</button>
                <button value={8} onClick={display}>8</button>
                <button value={9} onClick={display}>9</button>
                <button value={"*"} onClick={handleOperation}>*</button>
            </div>
            <div>
                <button value={4} onClick={display}>4</button>
                <button value={5} onClick={display}>5</button>
                <button value={6} onClick={display}>6</button>
                <button value={"-"} onClick={handleOperation}>-</button>
            </div>
            <div>
                <button value={1} onClick={display}>1</button>
                <button value={2} onClick={display}>2</button>
                <button value={3} onClick={display}>3</button>
                <button value={"+"} onClick={handleOperation}>+</button>
            </div>
            <div>
                <button value={0} onClick={display}>0</button>
                <button value={0} onClick={handleResult}>=</button>
            </div>    
        </div>
    )
}

export default Buttons
