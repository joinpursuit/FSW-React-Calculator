import React, {Component} from 'react';
import Screen from './../Screen/Screen';
import Button from './../Button/Button';
import math from './../../assets/math';
import {numberCodes, operationCodes} from './../../assets/keyCodes';
import './../../css/Calculator.css';

let operatorLast = false;

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    setStateSynchronous = (stateUpdate) => {
        return new Promise(resolve => {
            this.setState(stateUpdate, () => resolve());
        })
    } // End of setStateSynchronous()
    
    state = {
        operations: [],
        operands: ["0"]
    }

    mathFunctions = {
        "+": () => this.add,
        "-": () => this.subtract,
        "*": () => this.multiply,
        "/": () => this.divide,
        "^": () => this.exponent
    }

    componentDidMount = () => {
        document.addEventListener("keyup", this.handleKeyUp);
    } // End of componentDidMount() function
    
    handleKeyUp = (e) => {
        if(e.shiftKey && operationCodes[e.keyCode]) {
            this.addToScreen(operationCodes[e.keyCode]);
        } else if(numberCodes[e.keyCode]) {
            this.addToScreen(numberCodes[e.keyCode]);
        } else if(e.keyCode === 187 || e.keyCode === 13) {
            this.calculate();
        } else if(operationCodes[e.keyCode]) {
            this.addToScreen(operationCodes[e.keyCode]);
        } else if(e.keyCode === 8) {
            this.deleteLast();
        } else if(e.keyCode === 27) {
            this.resetScreen();
        }
    } // End of handleKeyUp() function

    isOperator = (input) => {
        return input === "+" || input === "-" || input === "*" || input === "/" || input === "^";
    } // End of isOperator() function

    setOperator = (input) => {
        let {operations, operands} = this.state;

        if(!operands.length) {
            this.setState({operations: [...operations, input], operands: [0]});
        } else {
            this.setState({operations: [...operations, input], operands: [...operands, "0"]});
        }

        operatorLast = true;
    } // End of setOperator() function

    isDecimal = (input) => input === ".";

    addDecimal = () => {
        let {operands} = this.state;
        let lastIdx = operands.length - 1;
        let currentOperand = operands[lastIdx];
        let newOperands = operands.slice(0, lastIdx);

        if(!currentOperand.includes(".")) {
            if(currentOperand === "0") {
                this.setState({operands: [...newOperands, "0."]});
            } else {
                this.setState({operands: [...newOperands, currentOperand + "."]});
            }
        }
    } // End of addDecimal() function

    addToScreen = (input) => {
        this.setState({res: ""});
        let {operands} = this.state; // Grabbing all operations and operands from state
        let lastIdx = operands.length - 1; // Grabbing the last index of the operands
        let currentOperand = operands[lastIdx]; // Grabbing the current operand (last in the arr)
        let newOperands = operands.slice(0, lastIdx); // Grabbing the operands arr w/o the current operand

        if(this.isOperator(input)) {
            // If the input is an operator, and the last input isn't an operator then the operator is set
            if(!operatorLast) this.setOperator(input);

        } else {
            if(this.isDecimal(input)) {
                this.addDecimal(input);
            } else {
                if(currentOperand === "0") {
                    this.setState({operands: [...newOperands, input]});
                } else {
                    this.setState({operands: [...newOperands, currentOperand + input]});
                }
                operatorLast = false;
            }
        }
    } // End of addToScreen() function

    isNegative = (operand) => operand[0] === "-";

    changeValue = () => {
        let {operands}  = this.state;
        let lastIdx = operands.length - 1; // Grabbing the last index of the operands
        let currentOperand = operands[lastIdx]; // Grabbing the current operand (last in the arr)
        let newOperands = operands.slice(0, lastIdx); // Grabbing the operands arr w/o the current operand
        
        if(this.isNegative(currentOperand)) {
            this.setState({operands: [...newOperands, currentOperand.slice(1)]})
        } else {
            if(currentOperand === "0") {
                this.setState({operands: [...newOperands, "-"]})
            } else {
                this.setState({operands: [...newOperands, "-" + currentOperand]})
            }
        }
    } // End of changeValue() function

    changePercent = () => {
        let {operands}  = this.state;
        let lastIdx = operands.length - 1; // Grabbing the last index of the operands
        let currentOperand = operands[lastIdx]; // Grabbing the current operand (last in the arr)
        let newOperands = operands.slice(0, lastIdx); // Grabbing the operands arr w/o the current operand

        this.setState({operands: [...newOperands, currentOperand / 100]});
    } // End of changePercent() function

    resetScreen = () => {
        this.setState({operations: [], operands: ["0"]});
    } // End of resetScreen() function

    findMathFunction = (operation) => {
        return this.mathFunctions[operation]();
    } // End of findMathFunction() function

    calculate = async () => {
        let {operations, operands} = this.state;
        if(!operations.length) return;

        let operationsToMutate = [...operations];
        let operandsToMutate = [...operands];

        if(!operatorLast) {
            let i = 0;
            while(i < operationsToMutate.length) {
                let operation = operationsToMutate[i];
                let firstOperand = operandsToMutate[i];
                let secondOperand = operandsToMutate[i + 1];
        
                if(operation === "^") {
                    let res = Math.pow(Number(firstOperand), Number(secondOperand));
                    operandsToMutate.splice(i, 2, res);
                    operationsToMutate.splice(i, 1);
                } else {
                    i++;
                }
            }

            i = 0;
            while(i < operationsToMutate.length) {
                let operation = operationsToMutate[i];
                let firstOperand = operandsToMutate[i];
                let secondOperand = operandsToMutate[i + 1];
        
                if(operation === "*") {
                    let res = Number(firstOperand) * Number(secondOperand);
                    operandsToMutate.splice(i, 2, res);
                    operationsToMutate.splice(i, 1);
                } else if(operation === "/") {
                    let res = Number(firstOperand) / Number(secondOperand);
                    operandsToMutate.splice(i, 2, res);
                    operationsToMutate.splice(i, 1);
                } else {
                    i++;
                }
            }

            i = 0;
            while(i < operationsToMutate.length) {
                let operation = operationsToMutate[i];
                let firstOperand = operandsToMutate[i];
                let secondOperand = operandsToMutate[i + 1];
        
                if(operation === "+") {
                    let res = Number(firstOperand) + Number(secondOperand);
                    operandsToMutate.splice(i, 2, res);
                    operationsToMutate.splice(i, 1);
                } else if(operation === "-") {
                    let res = Number(firstOperand) - Number(secondOperand);
                    operandsToMutate.splice(i, 2, res);
                    operationsToMutate.splice(i, 1);
                } else {
                    i++;
                }
            }
            this.setState({operations: [], operands: [operandsToMutate[0]]})
        }


        
    } // End of calculate() function

    add = async (num1, num2) => {
        await this.setStateSynchronous({res: num1 + num2});
    } // End of add() function

    subtract = async (num1, num2) => {
        await this.setStateSynchronous({res: (num1 - num2)});
    } // End of add() function

    multiply = async (num1, num2) => {
        await this.setStateSynchronous({res: (num1 * num2)});
    } // End of add() function

    divide = async (num1, num2) => {
        await this.setStateSynchronous({res: (num1 / num2)});
    } // End of add() function

    exponent = async (num1, num2) => {
        await this.setStateSynchronous({res: Math.pow(num1, num2)})
    } // End of exponent() function

    sqrRoot = () => {
        console.log("square root");
    } // End of sqrRoot() function

    sin = () => {
        console.log("sin");
    } // End of sin() function

    cos = () => {
        console.log("cos");
    } // End of cos() function

    tan = () => {
        console.log("tan");
    } // End of tan() function

    placeCommas = (str) => {
        let res = "";
        let toSlice = "";
        let decimal = "";

        if(str[0] !== "-") {
            if(str.length > 3) {
                for(let i = 0; i < str.length; i++) {
                    if(str[i] === ".") {
                        toSlice = str.slice(0, i);
                        decimal = str.slice(i);
                    }
                } 
            }
    
            if(!toSlice) toSlice = str;
    
            while(toSlice.length > 3) {
                let sliced = toSlice.slice(-3);
                res += "," + sliced;
                toSlice = toSlice.slice(0, -3);
            }
        } else {
            if(str.length > 4) {
                for(let i = 0; i < str.length; i++) {
                    if(str[i] === ".") {
                        toSlice = str.slice(0, i);
                        decimal = str.slice(i);
                    }
                } 
            }
    
            if(!toSlice) toSlice = str;
    
            while(toSlice.length > 4) {
                let sliced = toSlice.slice(-3);
                res += "," + sliced;
                toSlice = toSlice.slice(0, -3);
            }
        }


        return toSlice + res + decimal;
    } // End of placeCommas() function

    deleteLast = () => {
        let {operations, operands} = this.state
        let mutatedOperands = [...operands];
        let lastIdx = mutatedOperands.length - 1;
        let currentOperand = mutatedOperands[lastIdx];
        let newOperands = mutatedOperands.slice(0, lastIdx);

        if(mutatedOperands.length === operations.length) {
            this.setState({operations: operations.slice(0, operations.length -1)});
        } else {
            currentOperand = currentOperand.slice(0, currentOperand.length - 1);
            if(!currentOperand.length) {
                if(operands.length > 1) {
                    mutatedOperands.pop();
                    this.setState({operands: mutatedOperands});
                } else {
                    this.setState({operands: [...newOperands, "0"]})
                }
            } else {
                this.setState({operands: [...newOperands, currentOperand]});
            }
        }
    } // End of deleteLast() function
    
    render = () => {
        let screenText = "";
        let {operations, operands}  = this.state;

        operands.forEach((operand, i) => {
            if(operations[i]) screenText += this.placeCommas(operand.toString()) + operations[i];
            else screenText += this.placeCommas(operand.toString())
        })

        console.log(this.state);
        return (
            <div className={this.props.className}>
                <Screen className="screen" text={screenText}/>
                <button onClick={this.changeValue}>+/=</button>
                <button onClick={this.resetScreen}>C</button>
                <button onClick={this.deleteLast}>Del</button>
                <button className="operator" onClick={() => this.addToScreen("+")}>+</button>
                <button onClick={() => this.addToScreen("^")}>^</button>
                <button onClick={() => this.addToScreen("1")}>1</button>
                <button onClick={() => this.addToScreen("2")}>2</button>
                <button onClick={() => this.addToScreen("3")}>3</button>
                <button className="operator" onClick={() => this.addToScreen("-")}>-</button>
                <button onClick={this.sqrRoot}>&radic;</button>
                <button onClick={() => this.addToScreen("4")}>4</button>
                <button onClick={() => this.addToScreen("5")}>5</button>
                <button onClick={() => this.addToScreen("6")}>6</button>
                <button className="operator" onClick={() => this.addToScreen("*")}>*</button>
                <button onClick={this.changePercent}>%</button>
                <button onClick={() => this.addToScreen("7")}>7</button>
                <button onClick={() => this.addToScreen("8")}>8</button>
                <button onClick={() => this.addToScreen("9")}>9</button>
                <button className="operator" onClick={() => this.addToScreen("/")}>&divide;</button>
                <button onClick={this.cos}>COS()</button>
                <button className="zero" onClick={() => this.addToScreen("0")}>0</button>
                <button className="decimal" onClick={() => this.addToScreen(".")}>.</button>
                <button className="operator" className="equal" onClick={this.calculate}>=</button>
            </div>
        )
    }
}

export default Calculator;