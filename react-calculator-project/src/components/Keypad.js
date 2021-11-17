import { Component } from "react";
import './Keypad.css';
import zero from './zero.png';
import one from './one.png';
import two from './two.png';
import three from './three.png';
import four from './four.png';
import five from './five.png';
import six from './six.png';
import seven from './seven.png';
import eight from './eight.png';
import nine from './nine.png';

class Keypad extends Component{
    render(){
        const result = Number(this.props.display).toLocaleString();

        // console.log(three);
        return(
            <div className="keypad-container">
                <div className="keypad-display">
                    {/* <input readOnly={this.props.display} value={this.props.display.toLocaleString()} type="text"/> */}
                    <div>{result}</div>
                </div>
                <div className="keypad-label">
                  Hello Calculator
                </div>
                <section className="section-container">
                    <div className="keypad-controls">
                        <button onClick={this.props.handleReset} id="all-clear" value="AC">AC</button>
                        <button onClick={this.props.handleFlipSign} id="flip-sign" value="+/-">&#43;/&#45;</button>
                        <button onClick={this.props.handlePercent} id="percentage" value="%">&#37;</button>
                    </div>
                    <div className="keypad-numbers">
                        <button onClick={this.props.handleNumberClick} id="one" type="button" value="1">1</button>
                        <button onClick={this.props.handleNumberClick} id="two" type="button" value="2">2</button>
                        <button onClick={this.props.handleNumberClick} id="three" type="button" value="3">3</button>
                        <button onClick={this.props.handleNumberClick} id="four" type="button" value="4">4</button>
                        <button onClick={this.props.handleNumberClick} id="five" type="button" value="5">5</button>
                        <button onClick={this.props.handleNumberClick} id="six" type="button" value="6">6</button>
                        <button onClick={this.props.handleNumberClick} id="seven" type="button" value="7">7</button>
                        <button onClick={this.props.handleNumberClick} id="eight" type="button" value="8">8</button>
                        <button onClick={this.props.handleNumberClick} id="nine" type="button" value="9">9</button>
                        <button onClick={this.props.handleNumberClick} id="zero" type="button" value="0">0</button>
                        <button onClick={this.props.handleDecimal} id="decimalpoint" value=".">.</button>
                    </div>
                    <div className="keypad-operators">
                        <button onClick={()=>this.props.handleOperationChange('divide')} id="divide" value="/">&#247;</button>
                        <button onClick={()=>this.props.handleOperationChange('multiply')} id="multiply" value="*">&times;</button>
                        <button onClick={()=>this.props.handleOperationChange('subtract')} id="subtract" value="-">&#45;</button>
                        <button onClick={()=>this.props.handleOperationChange('add')} id="add" value="+">&#43;</button> 
                        <button onClick={this.props.evaluate} id="equals" value="=">&#61;</button>
                    </div>
                </section>
                <div className="keypad-footer">
                <img src={zero} className="digital-font" alt="zero" />
                <img src={one} className="digital-font" alt="one" />
                <img src={two} className="digital-font" alt="two" />
                <img src={three} className="digital-font" alt="three" />
                <img src={four} className="digital-font" alt="four" />
                <img src={five} className="digital-font" alt="five" />
                <img src={six} className="digital-font" alt="six" />
                <img src={seven} className="digital-font" alt="seven" />
                <img src={eight} className="digital-font" alt="nine" />
                <img src={nine} className="digital-font" alt="nine" />
                    <br />
                </div>
            </div>
        )
    }
    
}

export default Keypad;




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

    // calcSum=(arr)=>{
    //     let currentValue = 0;
    //     for (let num of arr) {
    //         currentValue += num;
    //     }
    //     return currentValue;
    // }

    // add to the display the number selected
    // set the state to have the 2 numbers with operator being added or whatever

    