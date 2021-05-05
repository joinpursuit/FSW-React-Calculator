import { Component } from 'react';
import "./calculator.css"
import Display from "./Display"

class Calculator extends Component {
    state = { input: "", result: "RESULT" }

    /* Returns last element in string */
    getLastElement = (string) => {
        const arr = string.trim().split(" ");
        return arr.pop();
    }
    /* Returns true is last element is operator */
    isLastElementOperator = () => {
        const { input } = this.state;
        const arr = input.trim().split(" ");
        const operands = "*+-/"
        while (arr.length > 0) {
            const lastElement = arr.pop();
            if(operands.includes(lastElement)){
                return true;
            }
            if (!isNaN(lastElement)) {
                return false;
            }
        }
        return false;
    }

    /* Returns true if last character is 0 */
    leadingZero = (string) => {
        const lastOperand = this.getLastElement(string)
        return lastOperand.charAt(0) === "0"; 
    }

    /* prevents 00  */
    handleZero = () => {
        const newInput = this.state.input;
        if (this.leadingZero(newInput)) return;
        newInput = newInput + "0"
        this.setState({ input: newInput })
    }

    handleNumber = (num) => {
        const { input, result } = this.state;
        if (input === result) return;
        let newInput = input + num;
        if (this.leadingZero(input)) {
            newInput = input.substring(0, input.length - 1) + num;
        }
        this.setState({ input: newInput })
    }

    handleOperator = (e) => {
        const { value } = e.target;
        const { input } = this.state;

        let lastElement = this.getLastElement(input)

        //do nothing if operator is last element
        if (this.isLastElementOperator() || lastElement === "") {
            return;
        }
        // handle spacing in case of parenthesese
        let newDisplay = (lastElement === ")" || lastElement === "(") ? `${input}${value} ` : `${input} ${value} `

        this.setState({ input: newDisplay })
    }

    handleParenthesis = (e) => {

        const { value } = e.target;
        const { input } = this.state;
        let leftCount = 0, rightCount = 0;
        let arr = input.split(" ")

        for (let char of arr) {
            if (char === "(") leftCount++;
            if (char === ")") rightCount++;
        }
        if (value === ")" && rightCount >= leftCount) {
            return;
        }

        let lastElement = this.getLastElement(input)

        let newDisplay = "";
        if (isNaN(lastElement)) {
            newDisplay = `${input}${value} `
        }
        else {
            newDisplay = `${input} ${value} `
        }
        this.setState({ input: newDisplay })
    }


    toggleSign = () => {
        let arr = this.state.input.split(" ");
        let lastOperand = arr.pop();
        if (Number(lastOperand) === 0) {
            return;
        } else if (Number(lastOperand) < 0) {
            lastOperand = lastOperand.substring(1)
        } else {
            lastOperand = "-" + lastOperand;
        }
        arr.push(lastOperand);
        let newDisplay = arr.join(" ");
        this.setState({ input: newDisplay })
    }

    doBasicMath = (operand1, operand2, operator) => {
        let firstNumber = Number(operand1)
        let secondNumber = Number(operand2)
        switch (operator) {
            case '+':
                return firstNumber + secondNumber;
            case '-':
                return secondNumber - firstNumber;
            case 'x':
                return firstNumber * secondNumber;
            case '/':
                return secondNumber / firstNumber;
            default:
        }
    }

    evaluate = () => {
        let operands = [], operators = [], result = 0;
        const { input } = this.state;
        let arr = input.trim().split(" ");
        if (this.isLastElementOperator() || arr.length < 3) return;

        //DIJKSTRA'S algorithm
        while (arr.length > 0) {
            let currentElement = arr.shift();
            if (!isNaN(currentElement)) {
                operands.push(currentElement)
            } else if (currentElement === "x" || currentElement === "+" || currentElement === "-" || currentElement === "/") {
                operators.push(currentElement)
            } else if (currentElement === ")") {
                if (operands.length < 2) { continue; }
                let firstOperand = operands.pop();
                let secondOperand = operands.pop();
                let firstOperator = operators.length ? operators.pop() : "x"
                result = this.doBasicMath(firstOperand, secondOperand, firstOperator);

                operands.push(result)

            } else {  }
        }

        while (operands.length > 1) {
            let firstOperand = operands.pop();
            let secondOperand = operands.pop();
            let firstOperator = operators.length ? operators.pop() : "x"
            result = this.doBasicMath(firstOperand, secondOperand, firstOperator);
            operands.push(result)
        }
        let newDisplay = "" + result;
        this.setState({ input: newDisplay, result: newDisplay })

    }

    handleClearScreen = () => {
        this.setState({ input: "" })
    }


    render() {
        const { input } = this.state
        return (<section className="calculator">
            <Display display={input} />
            <button className="keypad number" value="0" onClick={this.handleZero} >0</button>
            <button className="keypad number" value="1" onClick={() => this.handleNumber(1)} >1</button>
            <button className="keypad number" value="2" onClick={() => this.handleNumber(2)} >2</button>
            <button className="keypad number" value="3" onClick={() => this.handleNumber(3)} >3</button>
            <button className="keypad number" value="4" onClick={() => this.handleNumber(4)} >4</button>
            <button className="keypad number" value="5" onClick={() => this.handleNumber(5)} >5</button>
            <button className="keypad number" value="6" onClick={() => this.handleNumber(6)} >6</button>
            <button className="keypad number" value="7" onClick={() => this.handleNumber(7)} >7</button>
            <button className="keypad number" value="8" onClick={() => this.handleNumber(8)} >8</button>
            <button className="keypad number" value="9" onClick={() => this.handleNumber(9)} >9</button>
            <button className="keypad sign" value="+" onClick={this.handleOperator}>+</button>
            <button className="keypad sign" value="-" onClick={this.handleOperator}>-</button>
            <button className="keypad sign" value="x" onClick={this.handleOperator}>x</button>
            <button className="keypad sign" value="/" onClick={this.handleOperator}>÷</button>
            <button className="keypad sign" value="." onClick={this.handleOperator}>.</button>
            <button className="keypad sign" value="%" onClick={this.handleOperator}>%</button>
            <button className="keypad sign" value="(" onClick={this.handleParenthesis}>(</button>
            <button className="keypad sign" value=")" onClick={this.handleParenthesis}>)</button>
            <button className="keypad sign" onClick={this.toggleSign}>+/-</button>
            <button className="keypad sign" onClick={this.handleClearScreen}>AC</button>
            <button className="keypad eval" value="=" onClick={this.evaluate}>=</button>

        </section>)
    }


}

export default Calculator;