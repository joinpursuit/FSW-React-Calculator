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
        operands: ["0"],
        res: 0
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
            this.setState({operands: [...newOperands, "-" + currentOperand]})
        }
    } // End of changeValue() function

    resetScreen = () => {
        this.setState({operations: [], operands: ["0"]});
    } // End of resetScreen() function

    findMathFunction = (operation) => {
        return this.mathFunctions[operation]();
    } // End of findMathFunction function

    calculate = async () => {
        let {operations, operands} = this.state;
        if(!operations.length) return;
        this.setState({res: 0});
        let operationCount = 0;

        if(!operatorLast) {
            while(operands.length) {
                if(operationCount > 0) {
                    let operand = operands[0];
                    let currentOperation = operations[0];
                    await this.findMathFunction(currentOperation)(Number(this.state.res), Number(operand));

                    operands.shift();
                    operations.shift();
                } else {
                    let operand = operands[0];
                    let nextOperand = operands[1];
                    let currentOperation = operations[0];
        
                    await this.findMathFunction(currentOperation)(Number(operand), Number(nextOperand));
                    operands.shift();
                    operands.shift();
                    operations.shift();
                }
                operationCount++;
            }

            this.setState({operands: [this.state.res.toString()]})
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
                <Button onclick={this.addToScreen} text={"+"}/>
                <Button onclick={this.addToScreen} text={"^"} />
                <Button onclick={this.addToScreen} text={"1"}/>
                <Button onclick={this.addToScreen} text={"2"}/>
                <Button onclick={this.addToScreen} text={"3"}/>
                <Button onclick={this.addToScreen} text={"-"}/>
                <button onClick={this.sqrRoot}>sqrRoot</button>
                <Button onclick={this.addToScreen} text={"4"}/>
                <Button onclick={this.addToScreen} text={"5"}/>
                <Button onclick={this.addToScreen} text={"6"}/>
                <Button onclick={this.addToScreen} text={"*"}/>
                <button onClick={this.sin}>SIN()</button>
                <Button onclick={this.addToScreen} text={"7"}/>
                <Button onclick={this.addToScreen} text={"8"}/>
                <Button onclick={this.addToScreen} text={"9"}/>
                <Button onclick={this.addToScreen} text={"/"}/>
                <button onClick={this.cos}>COS()</button>
                <Button className="zero" onclick={this.addToScreen} text={"0"}/>
                <Button className="decimal" onclick={this.addToScreen} text={"."}/>
                <Button onclick={this.calculate} text={"="}/>
                <button onClick={this.tan}>TAN()</button>
            </div>
        )
    }
}

export default Calculator;