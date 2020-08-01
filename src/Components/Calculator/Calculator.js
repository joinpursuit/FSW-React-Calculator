import React, {Component} from 'react';
import Screen from '../Screen/Screen';
import {numberCodes, operationCodes} from '../../assets/keyCodes';
import '../../css/Calculator.css';

let operatorLast = false;

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    
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
        if(operationCodes[e.key]) {
            // If the key pressed is an operation add it to the screen
            this.addToScreen(operationCodes[e.key]);

        } else if(e.key === "%") {
            // If the key pressed is percent, change the operand to a percent
            this.changePercent();

        } else if(e.key === "=" || e.key === "Enter") {
            // If the key pressed is the equal sign or enter/return then calculate
            this.calculate();

        }  else if(e.key === "Backspace") {
            // If the key pressed is backspace, then delete last input
            this.deleteLast();

        }  else if(e.key === "Escape") {
            // If the key pressed is escape, then reset the calculator screen
            this.resetScreen();

        } else if(numberCodes[e.key]) {
            // if the key pressed is a number then add to the screen
            this.addToScreen(numberCodes[e.key]);
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
        let {operands, res} = this.state; // Grabbing all operations and operands from state
        let lastIdx = operands.length - 1; // Grabbing the last index of the operands
        let currentOperand = operands[lastIdx]; // Grabbing the current operand (last in the arr)
        let newOperands = operands.slice(0, lastIdx); // Grabbing the operands arr w/o the current operand

        if(this.isOperator(input)) {
            // If the input is an operator, and the last input isn't an operator then the operator is set
            if(!operatorLast) this.setOperator(input);

        } else {
            if(this.isDecimal(input)) {
                this.addDecimal(input);
            } else if(operands[0] === res.toString()) {
                this.setState(({operands: [input], res: 0}));
            }else {
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

        this.setState({operands: [...newOperands, (currentOperand / 100).toString()]});
    } // End of changePercent() function

    resetScreen = () => { 
        this.setState({operations: [], operands: ["0"]});
    } // End of resetScreen() function

    findMathFunction = (operation) => this.mathFunctions[operation]();

    findOperation = async (targetOperations, operations, operands) => {
        let i = 0;
        while(i < operations.length) {
            let operation = operations[i];
            let firstOperand = operands[i];
            let secondOperand = operands[i + 1];

            if(operation === targetOperations[0] || operation === targetOperations[1]) {
                let res = await this.findMathFunction(operation)(Number(firstOperand), Number(secondOperand));
                operands.splice(i, 2, res);
                operations.splice(i, 1);
            } else {
                i++;
            }
        }
    } // End of findOperation() function

    calculate = async () => {
        let {operations, operands} = this.state;
        if(!operations.length) return;

        let operationsToMutate = [...operations];
        let operandsToMutate = [...operands];

        if(!operatorLast) {
            await this.findOperation(["^"], operationsToMutate, operandsToMutate);

            await this.findOperation(["*", "/"], operationsToMutate, operandsToMutate);

            await this.findOperation(["+", "-"], operationsToMutate, operandsToMutate);

            this.setState({operations: [], operands: [operandsToMutate[0].toString()], res: [operandsToMutate[0]]})
        }
    } // End of calculate() function

    add = (num1, num2) => num1 + num2;

    subtract = (num1, num2) => num1 - num2;

    multiply = (num1, num2) => num1 * num2;

    divide = (num1, num2) => num1 / num2;

    exponent = (num1, num2) => Math.pow(num1, num2)

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
                res = "," + sliced + res;
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
        let operandsToMutate = [...operands];
        let lastIdx = operandsToMutate.length - 1;
        let currentOperand = operandsToMutate[lastIdx];
        let newOperands = operandsToMutate.slice(0, lastIdx);

        if(operandsToMutate.length === operations.length || !currentOperand.length) {
            if(!currentOperand.length) {
                operandsToMutate.pop()
                this.setState({operations: operations.slice(0, operations.length -1), operands: operandsToMutate});
            } else {
                this.setState({operations: operations.slice(0, operations.length -1)});
            }
        } else {
            currentOperand = currentOperand.slice(0, currentOperand.length - 1);
            if(operands.length === 1) {
                this.setState({operands: [...newOperands, "0"]})
            } else {
                this.setState({operands: [...newOperands, currentOperand]});
            }
        }
    } // End of deleteLast() function
    
    render = () => {
        let screenText = "";
        let {operations, operands}  = this.state;

        operands.forEach((operand, i) => {
            if(operations[i]) {
                screenText += this.placeCommas(operand.toString()) + operations[i];
            } else {
                screenText += this.placeCommas(operand.toString())
            }
        })

        console.log(this.state);
        return (
            <div className={this.props.className}>
                <Screen className="screen" text={screenText}/>
                <button onClick={this.resetScreen} className="red">C</button>
                <button onClick={this.deleteLast} className="red delete">&#9003;</button>
                <button className="operator orange" onClick={this.changeValue}>+/=</button>
                <button className="orange" onClick={this.changePercent}>%</button>
                <button onClick={() => this.addToScreen("1")}>1</button>
                <button onClick={() => this.addToScreen("2")}>2</button>
                <button onClick={() => this.addToScreen("3")}>3</button>
                <button className="operator orange" onClick={() => this.addToScreen("+")}>+</button>
                <button className="operator orange" onClick={() => this.addToScreen("-")}>-</button>
                <button onClick={() => this.addToScreen("4")}>4</button>
                <button onClick={() => this.addToScreen("5")}>5</button>
                <button onClick={() => this.addToScreen("6")}>6</button>
                <button className="operator orange" onClick={() => this.addToScreen("*")}>X</button>
                <button className="operator orange" onClick={() => this.addToScreen("/")}>&divide;</button>
                <button onClick={() => this.addToScreen("7")}>7</button>
                <button onClick={() => this.addToScreen("8")}>8</button>
                <button onClick={() => this.addToScreen("9")}>9</button>
                <button className="operator orange" onClick={() => this.addToScreen(".")}>.</button>
                <button className="orange" onClick={() => this.addToScreen("^")}>^</button>
                <button className="zero" onClick={() => this.addToScreen("0")}>0</button>
                <button className="operator equal orange" onClick={this.calculate}>=</button>
            </div>
        )
    }
}

export default Calculator;