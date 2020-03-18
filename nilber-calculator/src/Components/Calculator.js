import React, {useState, useEffect} from 'react';
import Button from './Button';
import '../CSS/Calculator.css'
import { create, all } from "mathjs";
import classNames from 'classnames'

const math = create(all);

const Calculator = () => {

        const [computation, setComputation] = useState("")
        const [result, setResult] = useState("0")
        const [error, setError] = useState("")

    let buttonGenerator = [
        {name: "obliterate", value: "Clear", handleClick: handleClear},
        {name: "equal", value:"=", handleClick: handleCalculate},
        {name: "sign", value:"-+", handleClick: handleSign},
        {name: "plus", value: "+", handleClick: handleExpression},
        {name: "subtract", value: "-", handleClick: handleExpression},
        {name: "multiply", value: "*", handleClick: handleExpression},
        {name: "divide", value: "/", handleClick: handleExpression},
        {name: "decimal", value: ".", handleClick: handleExpression},
        {name: "percentage", value: "%", handleClick: handlePercentage},
        {name: "open", value: "(", handleClick: handleExpression},
        {name: "closed", value: ")", handleClick: handleExpression},
        {name: "zero", value: "0", handleClick: handleExpression},
        {name: "one", value: "1", handleClick: handleExpression},
        {name: "two", value: "2", handleClick: handleExpression},
        {name: "three", value: "3", handleClick: handleExpression},
        {name: "four", value: "4", handleClick: handleExpression},
        {name: "five", value: "5", handleClick: handleExpression},
        {name: "six", value: "6", handleClick: handleExpression},
        {name: "seven", value: "7", handleClick: handleExpression},
        {name: "eight", value: "8", handleClick: handleExpression},
        {name: "nine", value: "9", handleClick: handleExpression},
    ]


    const handleClick = (event) => {
        setComputation("")
        console.log(computation)
        setComputation(computation + event.target.value)
    }


    let buttons = buttonGenerator.map( button => {
        return <Button name={button.name} value={button.value} onButtonClick={button.handleClick}/>
    })

    let classResult = classNames("display", "result")
    let classComputation = classNames("display", "computation")

    return (
        
        <div className="calculatorContainer">
            <div className="calculator">
                <div className={classResult}>{result}</div>
                <div className={classComputation}>{computation}</div>                
                {buttons}
            </div>
        </div>
    )



}


export default Calculator