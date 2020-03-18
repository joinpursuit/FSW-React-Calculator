import React, {useState, useEffect} from 'react';
import Button from './Button';
import Error from './Error';
import '../CSS/Calculator.css'
import { create, all } from "mathjs";
import classNames from 'classnames'

const math = create(all);

const Calculator = () => {

    const [computation, setComputation] = useState("")
    const [result, setResult] = useState("0")
    const [error, setError] = useState(false)

    const handleClear = () => {
        setComputation("")
        setResult("0")
        setError(false)
    }

    const handleBackspace = () => {
        setComputation(computation.slice(0,computation.length-1))
    }

    const handleCalculate = () => {
        let solution = math.evaluate(computation)
        setResult(solution)
        setComputation("")
    }
    
    const handleSign = () => {
        computation.charAt(0) === "-" ? setComputation(computation.slice(1)) : setComputation("-" + computation)
    }
    
    const handlePercentage = () => {
        setComputation(computation / 100)
    }

    const handleValidation = (calculation) => {
        !eval(calculation) && !"0" ? setError(true) && setResult("") : setError(false)
        console.log(eval(calculation))
    }

    const handleExpression = (event) => {
        setComputation(computation + event.target.value)
        handleValidation(computation)
    }

    let calculatorKeys = [
        {name: "obliterate", value: "Clear", handleClick: handleClear},
        {name: "backspace", value:"<-", handleClick: handleBackspace},
        {name: "equal", value:"=", handleClick: handleCalculate},
        {name: "sign", value:"-+", handleClick: handleSign},
        {name: "percentage", value: "%", handleClick: handlePercentage},
        {name: "plus", value: "+", handleClick: handleExpression},
        {name: "subtract", value: "-", handleClick: handleExpression},
        {name: "multiply", value: "*", handleClick: handleExpression},
        {name: "divide", value: "/", handleClick: handleExpression},
        {name: "decimal", value: ".", handleClick: handleExpression},
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

    let buttons = calculatorKeys.map( button => {
        return <Button key={button.name} name={button.name} value={button.value} onButtonClick={button.handleClick}/>
    })

    let classResult = classNames("display", "result")
    let classComputation = classNames("display", "computation")

    return (
        
        <div className="calculatorContainer">
            <div className="calculator">
                <div key="result" className={classResult}>{result}</div>
                <div key="computation" className={classComputation}>{computation}</div>                
                {buttons}
                {error ? <Error className="error" message="Invalid Input. Please Clear" /> : null}
            </div>
        </div>
    )
    
}

export default Calculator