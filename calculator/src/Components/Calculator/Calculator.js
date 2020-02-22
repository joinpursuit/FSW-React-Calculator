import React, {Component} from 'react';
import Screen from './../Screen/Screen';
import Button from './../Button/Button';

class Calculator extends Component {
    state = {
        operation: null,
        operandOne: "",
        operandTwo: ""
    }

    addToScreen = (number) => {
        if(number === "+" || number === "-" || number === "*" || number === "/") {
            if(!this.state.operandOne) this.setState({operation: number, operandOne: "0"});
            else this.setState({operation: number});
        } else if(!this.state.operation) {
            this.setState({operandOne: this.state.operandOne + number});
        } else {
            this.setState({operandTwo: this.state.operandTwo + number}) 
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
    } // End of resetScreen();
    
    render = () => {
        let screenText = "0";
        let {operandOne, operation, operandTwo}  = this.state;
        if(operandOne) screenText = operandOne;
        if(operation) screenText = operandOne + operation;
        if(operandTwo) screenText = operandOne + operation + operandTwo;
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
                <Button className="operand" onclick={this.addToScreen} text={"="}/>
            </div>
        )
    }
}

export default Calculator;