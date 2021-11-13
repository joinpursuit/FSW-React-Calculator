import { Component } from "react";
import './Keypad.css';

class Keypad extends Component{
    constructor(){
        super();

        this.state = {
            numInput: '',
            operation: '',
            result: 4,
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("submit button pressed.")
    }

    /* START: CONTROLS Section - Reset, pos/neg, percentage */
    handleControlsClick=()=>{
        // onClick event
    }

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
        })
        console.log(event.target.value);
    }

    handleOperatorClick=(event)=>{
        this.setState({
            operator: event.target.value,
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
                    <div onClick={this.handleControlsClick} className="keypad-controls">
                        <input 
                            onClick={this.handleReset} 
                            id="all-clear" 
                            type="button" 
                            value="AC"
                        />
                        <input 
                            onClick={this.handlePositiveNegative}
                            id="pos-neg" 
                            type="button" 
                            value="+/-"
                        />
                        <input 
                            onClick={this.handlePercentage}
                            id="percentage" 
                            type="button" 
                            value="%"
                        />
                    </div>
                    <div onClick={this.handleNumberClick} className="keypad-numbers">
                        <input id="one" type="button" value="1"/>
                        <input id="two" type="button" value="2"/>
                        <input id="three" type="button" value="3"/>
                        <input id="four" type="button" value="4"/>
                        <input id="five" type="button" value="5"/>
                        <input id="six" type="button" value="6"/>
                        <input id="seven" type="button" value="7"/>
                        <input id="eight" type="button" value="8"/>
                        <input id="nine" type="button" value="9"/>
                        <input id="zero" type="button" value="0"/>
                        <input id="decimalpoint" type="button" value="."/>
                    </div>
                    <div onClick={this.handleOperatorClick} className="keypad-operators">
                        <input id="divide" type="button" value="/"/>
                        <input id="multiply" type="button" value="*"/>
                        <input id="subtract" type="button" value="-"/>
                        <input id="add" type="button" value="+"/>
                        <input id="equals" type="submit" value="="/>
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