import React, { useState, useEffect } from 'react';
import DisplayCalculator from './displayCalculator'
import * as math from 'mathjs'

const Keyboard = () => {

    const [ values, setValues ] = useState([])
    const [ solution, setSolution ] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSolution(math.evaluate(values))
        debugger
    }

    const handleClick = (e) => {
        setValues(e.target.value)
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className={"calcFunctions"}>
            <button type="clear" >C</button>
            <button type="button" value={"+"} onClick={handleClick}>+</button>
            <button type="button" value={"-"} onClick={handleClick}>-</button>
            <button type="button" value={"*"} onClick={handleClick}>*</button>
            <button type="button" value={"/"} onClick={handleClick}></button>
            <button type="button" value={"+/-"} onClick={handleClick}>+/-</button>
            <button type="button" value={","}  onClick={handleClick}>","</button>
            <button type="submit">=</button>
        </div>
        <div className={"calcNumbers"}>
            <button type="button" value={0}>0</button>
            <button type="button" value={1}>1</button>
            <button type="button" value={2}>2</button>
            <button type="button" value={3}>3</button>
            <button type="button" value={4}>4</button>
            <button type="button" value={5}>5</button>
            <button type="button" value={6}>6</button>
            <button type="button" value={7}>7</button>
            <button type="button" value={8}>8</button>
            <button type="button" value={9}>9</button>
        </div>
        </form>

        <DisplayCalculator values={values} solution={solution}/>
    </div>
    )
}

export default Keyboard;