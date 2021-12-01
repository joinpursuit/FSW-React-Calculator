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
      firstNumber: "",
      isOperator: false
    };
  }
  
  handleKeypad = (e) => {
      console.log(e.target.value)
      this.setState({
        result: e.target.value,
        firstNumber: e.target.value
      })
        // if(numSwitch) {
        //   this.setState({
        //     secondNumber: secondNumber + e.target.value,
        //     result: secondNumber + e.target.value
        //   })
        // } else {
        //   this.setState({
        //     firstNumber: firstNumber + e.target.value,
        //     result: firstNumber + e.target.value,
        //   })
        // }
  }

  handleOperation = (e) => {
    this.setState({
      operation: e.target.value,
    })
  } 

//   handleOperator = (e) => {
// const {operation, numSwitch, firstNumber, secondNumber} = this.state

//     this.setState({
//       operation: e.target.value
//     })
//     // if an operation wasnt chosen number switch is false so do not switch
//     if(!operation) {
//       this.setState({
//         numSwitch: !numSwitch,
//       })
//     }
//     // if both numbers are true calculate
//     if(firstNumber && secondNumber) {
//       // calculate 
//     }
//   }

  
  handlePercentage = () => {
    this.setState({
      result: Math.round(this.state.result) / 100 
    })
   //  Math.round() / 100
  }


  handleEqualButton = () => {
    // this will perform calculations

    const {operation, firstNumber, result, userInput} = this.state

    switch (operation) {
      case "+":
        result = firstNumber + userInput;
        break;
      case "-":
        result = firstNumber - userInput;
        break;
      case "/":
        result = firstNumber / userInput;
        break;
      case "*":
        result = firstNumber * userInput;
        break;
      default:
    }
    this.setState({
      firstNumber: result,
      result: firstNumber
    });
    console.log(result)
  }

  handlePosNeg = () => {
    this.setState({
      result: this.state.result * -1
  })
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
               <button id="ac" value="ac" onClick={this.handleAllClear}>AC</button>
               <button id="posneg" value="+/-" onClick={this.handlePosNeg}>+/-</button>
               <button id="percent" value="%" onClick={this.handlePercentage}>%</button>
               <button id="divide" value="/" onClick={this.handleOperation}>DIV</button>
              
                <button id="seven" value="7" onClick={this.handleKeypad}>7</button>
                <button id="eight" value="8" onClick={this.handleKeypad}>8</button>
                <button id="nine" value="9" onClick={this.handleKeypad}>9</button>
                <button id="multiply" value="x" onClick={this.handleOperation}>MUL</button>
                      
                <button id="four" value="4" onClick={this.handleKeypad}>4</button>
                <button id="five" value="5" onClick={this.handleKeypad}>5</button>
                <button id="six" value="6" onClick={this.handleKeypad}>6</button>
                <button id="minus" value="-" onClick={this.handleOperation}>MIN</button>

                <button id="one" value="1" onClick={this.handleKeypad}>1</button>
                <button id="two" value="2" onClick={this.handleKeypad}>2</button>
                <button id="three" value="3" onClick={this.handleKeypad}>3</button>
                <button id="add"  value="+" onClick={this.handleOperation}>ADD</button>
              
                <button id="zero" value="0" onClick={this.handleKeypad}>0</button>
                <button id="decimal" value="." onClick={this.handleKeypad}>.</button>
                <button id="equal" value="=" onClick={this.handleEqualButton}>=</button>
          </div>
    </div>
    )
  }
}

export default App;
