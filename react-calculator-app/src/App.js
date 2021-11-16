import React from "react";
// import Display from "./components/Display";
// import Keypad from "./components/Keypad";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      operation: "",
      result: 0,
      firstNumber: 0,
      secondNumber: 0,
      numSwitch: false,
    };
  }
  
  handleKeypad = (e) => {
        if(numSwitch) {
          this.setState({
            secondNumber: this.state.secondNumber + e.target.value,
            result: this.state.secondNumber + e.target.value
          })
        } else {
          this.setState({
            firstNumber: this.state.firstNumber + e.target.value,
            result: this.state.firstNumber + e.target.value,
          })
        }
  }

  handleOperator = (e) => {
    this.setState({
      operation: e.target.value
    })
    // if an operation wasnt chosen number switch is false so do not switch
    if(!this.state.operation) {
      this.setState({
        numSwitch: !numSwitch,
      })
    }
    // if both numbers are true calculate
    if(this.state.firstNumber && this.state.secondNumber) {
      // calculate 
    }
  }

  
  handlePercentage = () => {
   //  Math.round() * 100
  }


  handleEqualButton = () => {
    // this will perform calculations
  }

  handlePosNeg = () => {
    // if pos * -1
    // if neg * -1
  }

  handleAllClear = () => {
      this.setState({
          userInput: "",
          operation: "",
          result: 0,
      })
  }
  render() {
    return(
      <div id="calc-app">

      <div className="keypad-buttons">

              <div id="calc-display">{this.state.result}</div>
               <button id="ac" onClick={this.handleAllClear}>AC</button>
               <button id="posneg" onClick={this.handlePosNeg}>+/-</button>
               <button id="percent" onClick={this.handlePercentage}>%</button>
               <button id="divide" onClick={this.handleDiv}>DIV</button>
              
                <button id="seven" onClick={()=>this.handleKeypad(7)}>7</button>
                <button id="eight" onClick={()=>this.handleKeypad(8)}>8</button>
                <button id="nine" onClick={()=>this.handleKeypad(9)}>9</button>
                <button id="multiply" onClick={this.handleMul}>MUL</button>
                      
                <button id="four" onClick={()=>this.handleKeypad(4)}>4</button>
                <button id="five" onClick={()=>this.handleKeypad(5)}>5</button>
                <button id="six" onClick={()=>this.handleKeypad(6)}>6</button>
                <button id="minus" onClick={this.handleSub}>MIN</button>

                <button id="one" onClick={()=>this.handleKeypad(1)}>1</button>
                <button id="two" onClick={()=>this.handleKeypad(2)}>2</button>
                <button id="three" onClick={()=>this.handleKeypad(3)}>3</button>
                <button id="add" onClick={this.handleSum}>ADD</button>
              
                <button id="zero" onClick={()=>this.handleKeypad(0)}>0</button>
                <button id="decimal" onClick={this.handleKeypad}>.</button>
                <button id="equal" onClick={this.handleEqualButton}>=</button>
          </div>
    </div>
    )
  }
}

export default App;
