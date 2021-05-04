import { Component } from 'react';
import "./calculator.css"
import Display from "./Display"

class Calculator extends Component {
    state = { input: "" }

    /* Returns last element in string */
    getLastElement = (string) => {
        let arr = string.trim().split(" ");
        return arr.pop();
    }
    isLastElementOperator = (lastElement) => {
        if (lastElement === "*" || lastElement === "+" || lastElement === "-" || lastElement === "/") {
            return true;
        }
        return false;
    }

    /* Returns true if last character is 0 */
    leadingZero = (string) => {
        let lastOperand = this.getLastElement(string)
        if (lastOperand.charAt(0) === "0") {
            return true;
        }
        return false;
    }

    handleZero = (e) => {
        let newInput = this.state.input;
        if (this.leadingZero(newInput)) {
            return;
        }
        newInput = newInput + e.target.value;
        this.setState({ input: newInput })
    }


    handleNumber = (num) => {
        const { input } = this.state;
        let newInput = input;
        if (this.leadingZero(input)) {
            newInput = input.substring(0, input.length - 1) + num;
        } else {
            newInput = input + num;
        }

        this.setState({ input: newInput })
    }

    handleOperator = (e) => {
        const { value } = e.target;
        const { input } = this.state;

        let lastElement = this.getLastElement(input)

        //return (do nothing) if operator is last element
        //if (isNaN(lastElement) || lastElement === "") {
        if (this.isLastElementOperator(lastElement) || lastElement === "") {
            return;
        }
        let newDisplay = `${input} ${value} `
        if (lastElement === ")" || lastElement === "(") {
            newDisplay = `${input}${value} `
        }

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
        //if (lastElement === "(" || lastElement === ")") {
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

    handlePlus = (operand1, operand2) => {
        return operand1 + operand2;
    }

    doBasicMath = (operand1, operand2, operator) => {
        let firstNumber = Number(operand1)
        let secondNumber = Number(operand2)
        switch (operator) {
            case '+':
                return firstNumber + secondNumber;
            case '-':
                return firstNumber - secondNumber;
            case 'x':
                return firstNumber * secondNumber;
            case '/':
                return firstNumber / secondNumber;
            default:
        }

    }

    Dijkstra = () => {
        let operands = [], operators = [], result = 0;
        const { input } = this.state;
        let arr = input.trim().split(" ");
        while (arr.length > 0) {
            let currentElement = arr.shift();
            if (!isNaN(currentElement)) {
                operands.push(currentElement)
            } else if (currentElement === "*" || currentElement === "+" || currentElement === "-" || currentElement === "/") {
                operators.push(currentElement)
            } else if (currentElement === ")") {
                let firstOperand = operands.pop();
                let secondOperand = operands.pop();
                let firstOperator = operators.length ? operators.pop() : "*"
                result = this.doBasicMath(firstOperand, secondOperand, firstOperator);

                operands.push(result)
                
            } else {

            }
        }
        while (operators.length > 0) {
            result = this.doBasicMath(operands.pop(), operands.pop(), operators.pop());
            operands.push(result)
            console.log(result + " : " + operands + " : " + operators)

        }


    }

    evaluate = (e) => {
        const { input } = this.state;
        let arr = input.trim().split(" ");
        if (arr.includes("(") || arr.includes(")")) {
            this.Dijkstra();
            return;
        }

        let result = 0;
        while (arr.length > 2) {
            result = this.doBasicMath(arr[0], arr[2], arr[1])
            arr.shift()
            arr.shift()
            arr.shift()
            arr.unshift(result)
        }
        let newInput = arr.join("");
        this.setState({ input: newInput })

        // this.setState((prevState) => {
        //     return { operands: [...prevState.operands, lastElement], display: newDisplay }
        // })

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
            <button className="keypad sign" >AC</button>
            <button className="keypad eval" value="=" onClick={this.evaluate}>=</button>

        </section>)
    }


}

export default Calculator;