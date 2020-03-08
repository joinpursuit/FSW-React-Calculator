import React, {Component} from "react";
import "../CSS/styleCalc.css";


class Calculator extends Component {
  // constructor(props) {
  //   super(props)
    state = {
      displayValue: "0",
      previousValue: null,
      operator: null,
      newValue: false
    }
 
  handleNumber = (e) => {
    const { displayValue, newValue } = this.state;
    if(displayValue === "0" || newValue === true) {
      this.setState({
        displayValue: e.target.value
      });
    } else {
      this.setState({
        displayValue: displayValue + e.target.value
      })
    }
  }

  handleAC = () => {
    this.setState({displayValue: "0"})
  }

 handleSwitchLogic = () => {
  const  { displayValue, previousValue, operator } = this.state;
  switch(operator) {
    case '÷':
      let result1 = Number(previousValue) / Number(displayValue);
      return this.setState({ displayValue: result1});
    case '*':
      let result2 = Number(previousValue) * Number(displayValue);
      return this.setState({displayValue: result2});
    case '+':
      let result3 = Number(previousValue) + Number(displayValue);
      return this.setState({displayValue: result3})
    case '-':
      let result4 = Number(previousValue) - Number(displayValue);
      return this.setState({displayValue: result4})
  }
 }



  // handleLogic = () => {
  //   const  { displayValue, previousValue, operator } = this.state;

  //   if(operator === "÷") {
  //     let result = Number(previousValue) / Number(displayValue);
  //     this.setState({ displayValue: result});

  //   } else if (operator === "*") {
  //     let result = Number(previousValue) * Number(displayValue);
  //     this.setState({displayValue: result})

  //   } else if(operator === "+") {
  //     let result = Number(previousValue) + Number(displayValue);
  //     this.setState({displayValue: result})

  //   } else if (operator === "-"){
  //     let result = Number(previousValue) - Number(displayValue);
  //     this.setState({displayValue: result})
  //   }
  // }

  handleOperator = (e) => {
    const { displayValue } = this.state;
    this.setState({
      displayValue: "",
      previousValue: displayValue,
      operator: e.target.value,
      newValue: true
    });
  };
  

  render () {
  
  return(
    <div className="calcBox">
      <div className="DisplayCalc"> 
      <p> {this.state.displayValue} </p>
      </div>
        <div className="row"> 
        <button value="÷" onClick={this.handleOperator}> ÷ </button>
        <button value="%" onClick={this.handleOperator}> % </button>
        <button value="±" onClick={this.handleNumber}> ± </button>
        <button value="AC" onClick={this.handleAC}> AC </button> 
        </div>

        <div className="row">
        <button value="*" onClick={this.handleOperator}> * </button>
        <button value="9" onClick={this.handleNumber}> 9 </button>
        <button value="8" onClick={this.handleNumber}> 8 </button>
        <button value="7" onClick={this.handleNumber}> 7 </button>
        </div> 

        <div className="row"> 
        <button value="-" onClick={this.handleOperator}> - </button>
        <button value="6" onClick={this.handleNumber}> 6 </button>
        <button value="5" onClick={this.handleNumber}> 5 </button>
        <button value="4" onClick={this.handleNumber}> 4 </button>
        </div>

        <div className="row">
        <button value="+" onClick={this.handleOperator}> + </button>
        <button value="3" onClick={this.handleNumber}> 3 </button>
        <button value="2" onClick={this.handleNumber}> 2 </button>
        <button value="1" onClick={this.handleNumber}> 1 </button>
        </div>

        <div className="row"> 
        <button value="=" onClick={this.handleSwitchLogic}> = </button>
        <button value="." onClick={this.handleNumber}> . </button>
        <button value="0" onClick={this.handleNumber}> 0 </button>
        </div>
      </div>
    )
  }
};

export default Calculator;

