import { Component } from "react";
import './Keypad.css';

class Keypad extends Component{
    constructor(){
        super();

        this.state = {
            // firstNumSelect: '',
            // secondNumSelect: '',
            // numInput: '',
            // operator: '',
            result: 0,
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
    }

    handleNumberClick=(event)=>{
        this.setState({
            // numInput: event.target.value,
            result: event.target.value,
        })
        console.log("number click is:", event.target.value);       
    }


    /* START: OPERATORS - calculate */
    // handleOperatorClick=(event)=>{
    //     this.setState({
    //         operator: event.target.value,
    //     })
    //     console.log(event.target.value);
    // }

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
            // operation: '',
            result: 0,
        })
        console.log(this.state);
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
                        { zeroToNineButtons() }
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