import React, {useState, useEffect} from 'react';
import Button from './Button';
import '../CSS/Calculator.css'
import { create, all } from "mathjs";

const math = create(all);

const Calculator = () => {

    // [display, setDisplay] = useState("")
    // [result, setResult] = useState("")
    // [error, setError] = useState("")

    let buttonGenerator = [
        {name: "obliterate", value: "C"},
        {name: "equal", value:"="},
        {name: "sign", value:"+-"},
        {name: "plus", value: "+"},
        {name: "subtract", value: "-"},
        {name: "multiply", value: "*"},
        {name: "divide", value: "/"},
        {name: "decimal", value:"."},
        {name: "zero", value: "0"},
        {name: "one", value: "1"},
        {name: "two", value: "2"},
        {name: "three", value: "3"},
        {name: "four", value: "4"},
        {name: "five", value: "5"},
        {name: "six", value: "6"},
        {name: "seven", value: "7"},
        {name: "eight", value: "8"},
        {name: "nine", value: "9"},
    ]


    const handleClick = () => {
        console.log(buttonGenerator)
    }

    let buttons = buttonGenerator.map( button => {
        return <Button key={button.name} name={button.name} value={button.value} onButtonClick={handleClick}/>
    })

    

    return (
        
        <div className="calculatorContainer">
            <div className="calculator">
                {buttons}
            </div>
        </div>
    )



}


export default Calculator