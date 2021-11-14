import { Component } from "react";
import './Keypad.css';

class Keypad extends Component{
    constructor(){
        super();

        this.state = {
            // numInput: '',
            selectedNum: 0,
            operation: '',
            nextSelectedNumber: '',
            result: 3500,
        }
    }

    // handleCommas=()=>{
    //     /* START: FOR comma every 3 digits */
    //     /* First half of number without decimals */
    //     let roundResult = Math.round(this.state.result)
    //     let roundResultCommas = roundResult.toString().split("").reverse().map((digit, index) => index !== 0 && index % 3 === 0 ? `${digit},` : digit).reverse().join("")
    //     roundResultCommas = roundResultCommas.split("")
    //     /* Second half of number - decimals */
    //     let removeCommas = this.state.result.toString().split("").reverse().map((digit, index) => index !== 0 && index % 3 === 0 ? `${digit},` : digit).reverse().join("")
    //     let getDecimal = removeCommas.split("").splice(-2).join("")
    //     getDecimal = getDecimal.split(",")
    //     /* Join the 2 arrays together using spread operator */
    //     let joinedResult = roundResultCommas
    //     let arr2 = getDecimal
    //     joinedResult = [...joinedResult, '.', arr2].join("");
    //     // for comma every 3 digits
    //     this.setState({
    //         result: joinedResult,
    //     })
    //     /* END: FOR comma every 3 digits */
    // }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("submit button pressed.")
    
        
    }

    handleNumberClick=(event)=>{
        console.log("selected number is:", event.target.value); // to see the input in console as you click
        // Store selected number
        this.setState({
            selectedNum: event.target.value,
        })
    }

    handleOperationChange=(event)=>{
        console.log(event.target.value);
        this.setState({
            operation: event.target.value,
        })
    }

    handleIncrement=(num)=>{
        this.setState({
            selectedNum: this.state.count +num,
        })
      }

    // calcSum=(arr)=>{
    //     let currentValue = 0;
    //     for (let num of arr) {
    //         currentValue += num;
    //     }
    //     return currentValue;
    // }
    /* END: OPERATORS */

    /* START: FORM - handle click events */
    // add to the display the number selected
    // set the state to have the 2 numbers with operator being added or whatever
    /* END: FORM - handle click events */

    handleReset=()=>{
        this.setState({
            // numInput: '',
            selectedNum: 0,
            operation: '',
            nextSelectedNumber: '',
            result: 0,
        })
        console.log("reset what this.state is using:", this.state);
    }

    handlePercent=(event)=>{
        console.log("Add code for handlePercent", event.target.value);
    }
    handlePosNeg=(event)=>{
        console.log("Add code for handlePosNeg", event.target.value);
    }
    handleDecimal=(event)=>{
        console.log("Add code for handleDecimal", event.target.value);
    }

    calculateEquals=()=>{

    }

    render(){
        // make buttons for 0-9
        const zeroToNineButtons = () => {
            const buttonArr = [];
            for (let i = 9; i >=0; i--) {
                buttonArr.push(
                <button onClick={this.handleNumberClick} key={i} id={"n" + i} value={i} type="button">{i}</button>
                )};
            return buttonArr;
        }

        return(
            <div className="keypad-container">
                <div className="keypad-display">
                    <div>{this.state.selectedNum}</div>
                    <div>{this.state.result}</div>
                </div>
                <div className="keypad-label">
                    {/* <p>••• Calculator 8.2 ••••••••••• (10-digit) •••</p> */}
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
                            onClick={this.handlePosNeg}
                            id="pos-neg" 
                            type="button" 
                            value="+/-"
                        >&#43;/&#45;</button>
                        <button 
                            onClick={this.handlePercent}
                            id="percentage" 
                            type="button" 
                            value="%"
                        >&#37;</button>
                    </div>
                    <div className="keypad-numbers">
                        { zeroToNineButtons() }
                        <button onClick={this.handleDecimal} id="decimalpoint" type="button" value=".">.</button>
                    </div>
                    <div className="keypad-operators">
                        <button onClick={this.handleOperationChange} id="divide" type="button" value="/">&#247;</button>
                        <button onClick={this.handleOperationChange} id="multiply" type="button" value="*">&times;</button>
                        <button onClick={this.handleOperationChange} id="subtract" type="button" value="-">&#45;</button>
                        <button onClick={this.handleOperationChange} id="add" type="button" value="+">&#43;</button> 
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