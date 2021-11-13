import { Component } from "react";
import Keypad from "./Keypad";


class Calculator extends Component{
    constructor(){
        super();

        this.state = {
            displayResult: 0,
        }
    }

    render(){
        return(
            <div className="calculator-container">
                Calculator
                <Keypad />
            </div>
        )
    }
}

export default Calculator;