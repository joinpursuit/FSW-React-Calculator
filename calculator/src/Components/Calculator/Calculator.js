import React, {Component} from 'react';
import Screen from './../Screen/Screen';
import Button from './../Button/Button';

class Calculator extends Component {
    state = {
        operation: null,
        operandOne: "",
        operandTwo: "",
        res: ""
    }

    addToScreen = (number) => {
        this.setState({res: ""});
        let {operandOne, operandTwo, operation} = this.state;
        if(number === "+" || number === "-" || number === "*" || number === "/") {
            if(!operandOne) this.setState({operation: number, operandOne: "0"});
            else this.setState({operation: number});
        } else if(!operation) {
            if(number === ".") {
                if(!this.state.operandOne.includes(".")) {
                    this.setState({operandOne: operandOne + number});
                }
            } else {
                this.setState({operandOne: operandOne + number});
            }

        } else {
            if(number === ".") {
                if(!this.state.operandTwo.includes(".")) {
                    this.setState({operandTwo: operandTwo + number});
                }
            } else {
                this.setState({operandTwo: operandTwo + number});
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
        this.setState({operandOne: "", operandTwo: "", operation: null, res: ""});
    } // End of resetScreen() function

    calculate = () => {
        let {operation, operandOne, operandTwo} = this.state;
        if(!operation || !operandOne || !operandTwo) console.log("Missing values");
        else if(operation === "+") this.add(Number(operandOne), Number(operandTwo));
        else if(operation === "-") this.subtract(Number(operandOne), Number(operandTwo));
        else if(operation === "*") this.multiply(Number(operandOne), Number(operandTwo));
        else if(operation === "/") this.divide(Number(operandOne), Number(operandTwo));
    } // End of calculate() function

    add = (num1, num2) => {
        this.setState({operandOne: num1 + num2, operandTwo: "", operation: null, res: num1 + num2});
    } // End of add() function

    subtract = (num1, num2) => {
        this.setState({operandOne: num1 - num2, operandTwo: "", operation: null, res: num1 - num2});
    } // End of add() function

    multiply = (num1, num2) => {
        this.setState({operandOne: num1 * num2, operandTwo: "", operation: null, res: num1 * num2});
    } // End of add() function

    divide = (num1, num2) => {
        this.setState({operandOne: num1 / num2, operandTwo: "", operation: null, res: num1 / num2});
    } // End of add() function

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
    
    render = () => {
        let screenText = "0";
        let {operandOne, operation, operandTwo, res}  = this.state;
        if(operandOne) screenText = this.placeCommas(operandOne);
        if(operation) screenText = this.placeCommas(operandOne) + operation;
        if(operandTwo) screenText = this.placeCommas(operandOne) + operation + this.placeCommas(operandTwo);
        if(res) screenText = this.placeCommas(res.toString());

        console.log(this.state);
        return (
            <div className={this.props.className}>
                <Screen className="screen" text={screenText}/>
                <Button className="changeValue" onclick={this.changeValue} text={"+/-"}/>
                <Button onclick={this.resetScreen} text={"C"}/>
                <Button className="operand" onclick={this.addToScreen} text={"+"}/>
                <Button onclick={this.addToScreen} text={"1"}/>
                <Button onclick={this.addToScreen} text={"2"}/>
                <Button onclick={this.addToScreen} text={"3"}/>
                <Button className="operand" onclick={this.addToScreen} text={"-"}/>
                <Button onclick={this.addToScreen} text={"4"}/>
                <Button onclick={this.addToScreen} text={"5"}/>
                <Button onclick={this.addToScreen} text={"6"}/>
                <Button className="operand" onclick={this.addToScreen} text={"*"}/>
                <Button onclick={this.addToScreen} text={"7"}/>
                <Button onclick={this.addToScreen} text={"8"}/>
                <Button onclick={this.addToScreen} text={"9"}/>
                <Button className="operand" onclick={this.addToScreen} text={"/"}/>
                <Button className="zero" onclick={this.addToScreen} text={"0"}/>
                <Button className="decimal" onclick={this.addToScreen} text={"."}/>
                <Button className="operand" onclick={this.calculate} text={"="}/>
            </div>
        )
    }
}

export default Calculator;