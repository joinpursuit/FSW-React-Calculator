import { Component } from "react";
import Keypad from "./Keypad";


class Calculator extends Component{
    constructor(){
        super();

        this.state = {
            displayResult: 0,
        }
    }

    handleCalculatorResult=(selectedNum)=>{
        this.setState({
            displayResult: selectedNum,
        })
    }

    render(){
        return(
            <div className="calculator-container">
                <Keypad handleCalculatorResult={this.handleCalculatorResult}/>
                <p>{this.state.displayResult}</p>
            </div>
        )
    }
}

export default Calculator;