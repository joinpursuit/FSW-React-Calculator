import { Component } from 'react';
import "./calculator.css"

class Calculator extends Component {
    state = { display: "0", operands: [], operandNum: 0 }


    leadingZero = (string) => {
        let arr = string.split(" ");
        let lastOperand = arr.pop();
        if (lastOperand.charAt(0) === "0") {
            return true;
        }
        return false;
    }

    handleZero = (e) => {
        let newInput = this.state.display;
        if (this.leadingZero(newInput)) {
            return;
        }
        newInput = newInput + e.target.value;
        this.setState({ display: newInput })
    }


    handleNumber = (e) => {
        const { value } = e.target;
        const { display } = this.state;
        let newInput = display;
        if (this.leadingZero(display)) {
            newInput = display.substring(0, display.length - 1) + value;
        } else {
            newInput = display + value;
        }

        this.setState({ display: newInput })
    }

    

    handlePlus = (e) => {
        const { display, operand1 } = this.state;
        if (operand1 === null && Number(display) !== 0) {
            let firstNum = Number(display)
            this.setState({ operand1: firstNum })
            let newDisplay = display + " + "
            this.setState({ display: newDisplay })
        }

    }
    toggleSign = () => {
        let arr = this.state.display.split(" ");
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
        this.setState({ display: newDisplay })
    }

    evaluate = (e) => {


    }


    render() {
        const { display, operands } = this.state
        console.log(operands)
        return (<section className="calculator">
            <h2 className="display">{display}</h2>
            <button className="keypad number" value="0" onClick={this.handleZero} >0</button>
            <button className="keypad number" value="1" onClick={this.handleNumber} >1</button>
            <button className="keypad number" value="2" onClick={this.handleNumber} >2</button>
            <button className="keypad number" value="3" onClick={this.handleNumber} >3</button>
            <button className="keypad number" value="4" onClick={this.handleNumber} >4</button>
            <button className="keypad number" value="5" onClick={this.handleNumber} >5</button>
            <button className="keypad number" value="6" onClick={this.handleNumber} >6</button>
            <button className="keypad number" value="7" onClick={this.handleNumber} >7</button>
            <button className="keypad number" value="8" onClick={this.handleNumber} >8</button>
            <button className="keypad number" value="9" onClick={this.handleNumber} >9</button>
            <button className="keypad sign" value="+" onClick={this.handleOperator}>+</button>
            <button className="keypad sign">-</button>
            <button className="keypad sign">x</button>
            <button className="keypad sign" >÷</button>
            <button className="keypad sign" onClick={this.toggleSign}>+/-</button>
            <button className="keypad sign" >AC</button>
            <button className="keypad eval" value="=" onClick={this.evaluate}>=</button>

        </section>)
    }


}

export default Calculator;