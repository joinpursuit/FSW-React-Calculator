import { Component } from "react";
import './Keypad.css';

class Keypad extends Component{
    constructor(){
        super();

        this.state = {
            // firstNumSelect: '',
            // secondNumSelect: '',
            numInput: '',
            selectedNum: 0,
            operation: '',
            result: 4323500.02,
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("submit button pressed.")
        // this.setState({
        //     result: event.target.value,
        // })
        // console.log("state is:", this.state.result)
        // let result = this.state.result;
        // this.props.handleCalculatorResult(result);  

        /* First half of number without decimals */
        let roundResult = Math.round(this.state.result)
        console.log("here:", roundResult)
        let roundResultCommas = roundResult.toString().split("").reverse().map((digit, index) => index != 0 && index % 3 === 0 ? `${digit},` : digit).reverse().join("")
        roundResultCommas = roundResultCommas.split("")
        console.log("here again:", roundResultCommas)

        /* Second half of number - decimals */
        let removeCommas = this.state.result.toString().split("").reverse().map((digit, index) => index != 0 && index % 3 === 0 ? `${digit},` : digit).reverse().join("")
        let getDecimal = removeCommas.split("").splice(-2).join("")
        getDecimal = getDecimal.split(",")
        console.log("decimal:", getDecimal)

        /* Join the 2 arrays together using spread operator */
        let joinedResult = roundResultCommas
        let arr2 = getDecimal
        joinedResult = [...joinedResult, '.', arr2].join("");
        console.log("joined result:", joinedResult);

        // works for numbers with no decimal
        this.setState({
            // for comma every 3 digits
            result: joinedResult,
        })
    }
    // result: 78,
    // result: this.state.result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})

    handleNumberClick=(event)=>{
        console.log("selected number is:", event.target.value); // to see the input in console as you click
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

    /* START: OPERATORS - calculate */
    // handleIncrement=(num)=>{
    //     this.setState({
    //         count: this.state.count +num,
    //     })
    // }

    // calcSum=(arr)=>{
    //     let currentValue = 0;
    //     for (let num of arr) {
    //         currentValue += num;
    //     }
    //     return currentValue;
    // }
    /* END: OPERATORS */

    /* START: CONTROLS Section - Reset, pos/neg, percentage */
  

    // handlePositiveNegative=(event)=>{
    //     // onClick event
    //     // if positive, make negative.
    //     // if negative, make positive.
    //     console.log(event.target.value);
    // }

    // handlePercentage=(event)=>{
    //     // onClick event
    //     // divide by 100 with decimal point rounded.
    //     console.log(event.target.value);
    // }
    /* END: CONTROLS Section - Reset, pos/neg, percentage */

    /* START: FORM - handle click events */
    // add to the display the number selected
    // set the state to have the 2 numbers with operator being added or whatever
    /* END: FORM - handle click events */

    handleReset=()=>{
        this.setState({
            // firstNumSelect: '',
            // secondNumSelect: '',
            // numInput: '',
            operation: '',
            selectedNum: 0,
            result: 0,
        })
        console.log("reset what this.state is using:", this.state);
    }

    render(){
        // make buttons for 0-9
        const zeroToNineButtons = () => {
            const buttonArr = [];
            for (let i = 9; i >=0; i--) {
                buttonArr.push(
                <button key={i} id={"n" + i} value={i} type="button">{i}</button>
                )};
            return buttonArr;
        }

        return(
            <div className="keypad-container">
                <div className="keypad-display">
                    <div>curr: {this.state.selectedNum}</div>
                    <div>rslt: {this.state.result}</div>
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
                        { zeroToNineButtons() }
                        <button id="decimalpoint" type="button" value=".">.</button>
                    </div>
                    <div className="keypad-operators">
                        <button onClick={this.handleOperationChange} id="divide" type="button" value="/">&#247;</button>
                        <button onClick={this.handleOperationChange} id="multiply" type="button" value="*">&times;</button>
                        <button onClick={this.handleOperationChange} id="subtract" type="button" value="-">&#45;</button>
                        <button onClick={()=>this.handleOperationChange(this.state.operation)} id="add" type="button" value="+">+Custom</button>
                        {/* <button onClick={this.handleOperationChange} id="add" type="button" value="+">&#43;</button>  */}
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