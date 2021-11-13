import { Component } from "react";
import './Keypad.css';

class Keypad extends Component{
    constructor(){
        super();

        this.state = {
            count: 0,
            numInput: '',
            operator: '',
            result: 0,
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("submit button pressed.")
    }

    /* START: OPERATORS - calculate */
    handleOperatorClick=(event)=>{
        this.setState({
            operator: event.target.value,
        })
        console.log(event.target.value);
    }

    handleIncrement=(num)=>{
        this.setState({
            count: this.state.count +num,
        })
    }

    calcSum=(arr)=>{
        let currentValue = 0;
        for (let num of arr) {
            currentValue += num;
        }
        return currentValue;
    }
    /* END: OPERATORS */

    /* START: CONTROLS Section - Reset, pos/neg, percentage */
    handleReset=()=>{
        this.setState({
            numInput: '',
            operation: '',
            result: 0,
        })
        console.log(this.state);
    }

    handlePositiveNegative=(event)=>{
        // onClick event
        // if positive, make negative.
        // if negative, make positive.
        console.log(event.target.value);
    }

    handlePercentage=(event)=>{
        // onClick event
        // divide by 100 with decimal point rounded.
        console.log(event.target.value);
    }
    /* END: CONTROLS Section - Reset, pos/neg, percentage */

    /* START: FORM - handle click events */
    handleNumberClick=(event)=>{
        this.setState({
            numInput: event.target.value,
            result: event.target.value,
        })
        console.log(event.target.value);       
    }
    /* END: FORM - handle click events */

    render(){
        return(
            <div className="keypad-container">
                <div className="keypad-display">
                    <div>{this.state.result}</div>
                </div>
                <div className="keypad-label">
                    <p>Calculator 8.2</p>
                </div>
                <form onSubmit={this.handleSubmit} className="form-container">
                    <div className="keypad-controls">
                        <button 
                            onClick={this.handleReset} 
                            id="all-clear" 
                            type="button" 
                            value="AC"
                        >AC</button>
                        <button 
                            onClick={this.handlePositiveNegative}
                            id="pos-neg" 
                            type="button" 
                            value="+/-"
                        >&#43;/&#45;</button>
                        <button 
                            onClick={this.handlePercentage}
                            id="percentage" 
                            type="button" 
                            value="%"
                        >&#37;</button>
                    </div>
                    <div onClick={this.handleNumberClick} className="keypad-numbers">
                        <button id="one" type="button" value="1">1</button>
                        <button id="two" type="button" value="2">2</button>
                        <button id="three" type="button" value="3">3</button>
                        <button id="four" type="button" value="4">4</button>
                        <button id="five" type="button" value="5">5</button>
                        <button id="six" type="button" value="6">6</button>
                        <button id="seven" type="button" value="7">7</button>
                        <button id="eight" type="button" value="8">8</button>
                        <button id="nine" type="button" value="9">9</button>
                        <button id="zero" type="button" value="0">0</button>
                        <button id="decimalpoint" type="button" value=".">.</button>
                    </div>
                    <div onClick={this.handleOperatorClick} className="keypad-operators">
                        <button id="divide" type="button" value="/">&#247;</button>
                        <button id="multiply" type="button" value="*">&times;</button>
                        <button id="subtract" type="button" value="-">&#45;</button>
                        <button onClick={()=>this.handleIncrement(this.state.numInput)} id="add" type="button" value="+">&#43;</button>
                        <button id="equals" type="submit" value="=">&#61;</button>
                    </div>
                </form>
                <div className="keypad-footer">
                    <br />
                </div>
            </div>
        )
    }
    
}

export default Keypad;