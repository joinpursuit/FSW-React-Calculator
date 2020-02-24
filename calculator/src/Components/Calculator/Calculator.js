import React, {Component} from 'react';
import Screen from './../Screen/Screen';
import Button from './../Button/Button';
import './../../css/Calculator.css';

const numberCodes = {
    48: "0",
    96: "0",
    49: "1",
    97: "1",
    50: "2",
    98: "2",
    51: "3",
    99: "3",
    52: "4",
    100: "4",
    53: "5",
    101: "5",
    54: "6",
    102: "6",
    55: "7",
    103: "7",
    56: "8",
    104: "8",
    57: "9",
    105: "9",
    110: ".",
    190: "."
}

const operationCodes = {
    54: "^",
    56: "*",
    106: "*",
    187: "+",
    107: "+",
    189: "-",
    109: "-",
    191: "/",
    111: "/"
}

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    
    state = {
        operation: null,
        operandOne: "",
        operandTwo: ""
    }

    componentDidMount() {
        document.addEventListener("keyup", this.handleKeyUp);
      }
    
    handleKeyUp(e) {
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

    addToScreen = (input) => {
        this.setState({res: ""});
        let {operandOne, operandTwo, operation} = this.state;
        if(this.isOperator(input)) {
            if(!operandOne) this.setState({operation: input, operandOne: "0"});
            else this.setState({operation: input});
        } else if(!operation) {
            if(input === ".") {
                if(!this.state.operandOne.includes(".")) {
                    if(!this.state.operandOne) this.setState({operandOne: "0."});
                    else this.setState({operandOne: operandOne + input});
                }
            } else {
                this.setState({operandOne: operandOne + input});
            }

        } else {
            if(input === ".") {
                if(!this.state.operandTwo.includes(".")) {
                    this.setState({operandTwo: operandTwo + input});
                }
            } else {
                if(operation === "sin" || operation === "cos" || operation ==="tan") {
                    if(operation === "sin") this.sin(input);
                    if(operation === "cos") this.cos(input);
                    if(operation === "tan") this.tan(input);
                }
                this.setState({operandTwo: operandTwo + input});
            }
        }
    } // End of addToScreen() function

    changeValue = () => {
        let {operandOne, operation, operandTwo}  = this.state;
        if(!operation) {
            if(operandOne[0] === "-") this.setState({operandOne: operandOne.slice(1)})
            else this.setState({operandOne: "-" + operandOne});
        } else {
            if(operandTwo[0] === "-") this.setState({operandTwo: operandTwo.slice(1)})
            else this.setState({operandTwo: "-" + operandTwo});
        }
    } // End of changeValue() function

    resetScreen = () => {
        this.setState({operandOne: "", operandTwo: "", operation: null});
    } // End of resetScreen() function

    calculate = () => {
        let {operation, operandOne, operandTwo} = this.state;
        if(!operation || !operandOne || !operandTwo) console.log("Missing values");
        else if(operation === "+") this.add(Number(operandOne), Number(operandTwo));
        else if(operation === "-") this.subtract(Number(operandOne), Number(operandTwo));
        else if(operation === "*") this.multiply(Number(operandOne), Number(operandTwo));
        else if(operation === "/") this.divide(Number(operandOne), Number(operandTwo));
        else if(operation === "^") this.exponent(Number(operandOne), Number(operandTwo));
    } // End of calculate() function

    add = (num1, num2) => {
        this.setState({operandOne: (num1 + num2).toString(), operandTwo: "", operation: null});
    } // End of add() function

    subtract = (num1, num2) => {
        this.setState({operandOne: (num1 - num2).toString(), operandTwo: "", operation: null});
    } // End of add() function

    multiply = (num1, num2) => {
        this.setState({operandOne: (num1 * num2).toString(), operandTwo: "", operation: null});
    } // End of add() function

    divide = (num1, num2) => {
        this.setState({operandOne: (num1 / num2).toString(), operandTwo: "", operation: null});
    } // End of add() function

    exponent = (num1, num2) => {
        this.setState({operandOne: Math.pow(num1, num2).toString(), operandTwo: "", operation: null})
    } // End of exponent() function

    sqrRoot = () => {
        let {operandOne, operandTwo} = this.state;
        if(!operandTwo) {
            this.setState({operandOne: Math.sqrt(operandOne).toString(), operandTwo: "", operation: null})
        } 
    } // End of sqrRoot() function

    sin = () => {
        let {operandOne, operandTwo} = this.state;
        if(!operandTwo && operandOne) {
            this.setState({operandOne: Math.sin(operandOne).toString(), operandTwo: "", operation: null})
        }
    } // End of sin() function

    cos = () => {
        let {operandOne, operandTwo} = this.state;
        if(!operandTwo && operandOne) {
            this.setState({operandOne: Math.cos(operandOne).toString(), operandTwo: "", operation: null})
        }
    } // End of cos() function

    tan = () => {
        let {operandOne, operandTwo} = this.state;
        if(!operandTwo && operandOne) {
            this.setState({operandOne: Math.tan(operandOne).toString(), operandTwo: "", operation: null})
        }
    } // End of tan() function

    placeCommas = (str) => {
        let res = "";
        let toSlice = "";
        let decimal = "";

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

        return toSlice + res + decimal;
    } // End of placeCommas() function

    deleteLast = () => {
        let {operandOne, operandTwo, operation} = this.state
        if(operandTwo) this.setState({operandTwo: operandTwo.slice(0, operandTwo.length - 1)});
        else if(operation) this.setState({operation: null});
        else if(operandOne) this.setState({operandOne: operandOne.slice(0, operandOne.length - 1)});
    } // End of deleteLast() function
    
    render = () => {
        let screenText = "0";
        let {operandOne, operation, operandTwo}  = this.state;
        if(operandOne) screenText = this.placeCommas(operandOne);
        if(operation) screenText = this.placeCommas(operandOne) + operation;
        if(operandTwo) screenText = this.placeCommas(operandOne) + operation + this.placeCommas(operandTwo);

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